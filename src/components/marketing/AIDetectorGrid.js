import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function AIDetectorGrid({ cards }) {
  const [statuses, setStatuses] = React.useState({});

  const statusMap = {
    green: { label: "Reliable", color: "success" },
    yellow: { label: "Suspicious", color: "warning" },
    red: { label: "Unreliable", color: "error" },
  };

  const handleClick = (id, statusFromCard) => {
    setStatuses((prev) => ({
      ...prev,
      [id]: statusFromCard,
    }));
  };

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* Limiter za centriranje grida */}
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"   // kartice centrirane
        >
          {cards.map((card) => {
            const currentStatus = statuses[card.id] || null;
            const cfg = currentStatus ? statusMap[currentStatus] : null;

            return (
              <Grid
                item
                xs={12}      // 1 u redu na telefonu
                sm={6}       // 2 u redu na manjim ekranima
                md={4}       // 3 u redu na laptopu/desktopu
                key={card.id}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 450,        // lepo ograničenje da kartice ne budu prenabacane
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="preview"
                    sx={{
                      height: 400,
                      width: "100%",
                      objectFit: "cover",
                      borderBottom: "1px solid rgba(0,0,0,0.1)",
                    }}
                  />

                  <CardContent>
                    <Typography variant="h6">AI Detector</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click to analyze with AI.
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ mt: "auto" }}>
                    <Button
                      fullWidth
                      variant={cfg ? "contained" : "outlined"}
                      color={cfg ? cfg.color : "inherit"}
                      onClick={() => handleClick(card.id, card.status)}
                      sx={{
                        borderRadius: 2,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {cfg ? cfg.label : "AI Check"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
