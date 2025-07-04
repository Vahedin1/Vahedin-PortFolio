import { Typography } from "@mui/material";

export default function NoPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
          <div style={{ flex: "1 0 auto" }}>
          <Typography
          sx={{
            textDecoration: "none",
            fontFamily: "Bahnschrift, Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "0rem",
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "50px",
            fontSize: {
              sm: "2rem",
              xs: "1rem",
            },
          }}
        >
          <br />
          Incorrect Adress
        </Typography>
          </div>
    </div>
  );
}
