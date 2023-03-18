import React from "react";
import { Grid, Paper, Typography, Box, Rating } from "@mui/material";

const styles = {
  boxStyle: {
    display: "flex",
    alignItems: "center",
  },
};

const Card = (props) => {
  const [value, setValue] = React.useState(3.75);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={8}>
        <img
          src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-1.jpg?mw=1500&hash=99BF564468EA5A59B56A560019ED33AEBACB37A4"
          alt="niagara falls"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle2" gutterBottom>
            Immerse into the falls
          </Typography>

          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            earum debitis exercitationem quis vitae sapiente autem? Dolores
            perspiciatis recusandae, exercitationem repellat fugit ut magnam
            quaerat eum necessitatibus doloribus iure illo?
          </Typography>

          <Box sx={styles.boxStyle}>
            <Rating
              name="read-only"
              value={value}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {" "}
              4.5{" "}
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1.5}>
              {" "}
              (375 reviews )
            </Typography>
          </Box>
          <Box sx={styles.boxStyle}>
            <Typography variant="h6" component="h3" marginLeft={0.5}>
              From $300
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
