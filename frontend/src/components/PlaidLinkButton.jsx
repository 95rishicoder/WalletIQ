import { useCallback, useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

function PlaidLinkButton() {
  const [linkToken, setLinkToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLinkToken = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/plaid/link-token",
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create Plaid Link token");
      }

      const data = await response.json();
      setLinkToken(data.linkToken);
    } catch (error) {
      console.error("Plaid Link token error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getLinkToken();
  }, [getLinkToken]);

  const onSuccess = useCallback(async (publicToken, metadata) => {
    console.log("Plaid connection successful!");
    console.log("Metadata:", metadata);

    try {
      const response = await fetch(
        "http://localhost:8080/api/plaid/exchange-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            public_token: publicToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to exchange Plaid public token");
      }

      const data = await response.json();

      console.log("Plaid token exchange successful!");
      console.log("Plaid Item ID:", data.item_id);
    } catch (error) {
      console.error("Plaid token exchange error:", error);
    }
  }, []);

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  console.log("Plaid linkToken:", linkToken);
  console.log("Plaid ready:", ready);

  return (
    <button
      type="button"
      onClick={() => open()}
      disabled={!ready || loading}
    >
      {loading ? "Loading..." : "Connect Bank Account"}
    </button>
  );
}

export default PlaidLinkButton;