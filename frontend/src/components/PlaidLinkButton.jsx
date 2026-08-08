import { useCallback, useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

function PlaidLinkButton() {
  const [linkToken, setLinkToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLinkToken = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/plaid/link-token", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to create Plaid Link token");
      }

      const data = await response.json();
      setLinkToken(data.link_token);
    } catch (error) {
      console.error("Plaid Link token error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getLinkToken();
  }, [getLinkToken]);

  const onSuccess = useCallback((publicToken, metadata) => {
    console.log("Plaid connection successful!");
    console.log("Public token:", publicToken);
    console.log("Metadata:", metadata);

    // We will send the public token to the backend
    // in the next step.
  }, []);

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

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