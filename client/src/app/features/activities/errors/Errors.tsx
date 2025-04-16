import { ButtonGroup, Button, Container, Alert } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import agent from "../../../../utils/agent";

const Errors = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const { mutate } = useMutation({
    mutationFn: async ({ path, method = "get" }: { path: string; method: string }) => {
      if (method === "post") await agent.post(path, {});
      else await agent.get(path);
    },
    onError: (err) => {
      if (Array.isArray(err)) {
        setValidationErrors(err);
      } else {
        setValidationErrors([]);
      }
    },
  });

  const handleError = (path: string, method = "get") => {
    mutate({ path, method });
  };

  return (
    <>
      <Container>
        <ButtonGroup variant="contained" sx={{ mt: 4 }}>
          <Button onClick={() => handleError("buggy/not-found")}>Not found</Button>
          <Button onClick={() => handleError("buggy/bad-request")}>Bad request</Button>
          <Button onClick={() => handleError("activities", "post")}>Validation error</Button>
          <Button onClick={() => handleError("buggy/server-error")}>Server error</Button>
          <Button onClick={() => handleError("buggy/unauthorised")}>Unauthorised</Button>
        </ButtonGroup>
        {validationErrors.map((err, i) => (
          <Alert key={i} severity="error">
            {err}
          </Alert>
        ))}
      </Container>
    </>
  );
};

export default Errors;
