import {
  Typography,
  Grid,
  List,
  styled,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";
import React from "react";

function DisplayTeams() {
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  return (
    <div>
      <Typography
        component="box"
        sx={{
          fontSize: "32px",
          float: "left",
          paddingLeft: "30px",
          paddingTop: "72px",
          paddingBottom: "10px",
        }}
      >
        Purple Team v/s Orange Team
        <br />
        <Typography
          component="box"
          sx={{
            color: "#448791",
            fontSize: "20px",
            float: "left",
          }}
        >
          Location, City, State &nbsp;
        </Typography>
        <Typography
          component="box"
          sx={{
            color: "#797979",
            fontSize: "20px",
            float: "left",
          }}
        >
          {" "}
          hehe Overs
        </Typography>
      </Typography>

      <Typography
        component="box"
        sx={{
          color: "#797979",
          fontSize: "20px",
          textAlign: "right",
          paddingTop: "80px",
          paddingRight: "160px",
          float: "right",
        }}
      >
        {" "}
        Toss: <br />
        Purple Team
      </Typography>

      <Typography component="box" sx={{ backgroundColor: "#D9D9D9" }}>
        <hr style={{ width: "96vw" }} />
      </Typography>
      <Box
        component="div"
        sx={{
          marginLeft: "15vw",
          marginRight: "5vw",
          marginTop: "104px",
        }}
      >
        <Grid container spacing={2} sx = {{mb: "200px"}}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "#448791",
            }}
          >
            <Typography
              sx={{ mt: 4, mb: 2, textAlign: "left", ml: "70px", backgroundColor: "#448791" }}
              variant="h6"
              component="div"
            >
              Avatar with text
            </Typography>
            <Demo>
              <List dense={false}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{/* <FolderIcon /> */}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="Secondary text"
                    />
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>

          <br />
          <br />
          <br />

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mt: 4, mb: 2, textAlign: "left", marginLeft: "70px"}}
              variant="h6"
              component="div"
            >
              Avatar with text
            </Typography>
            <Demo>
              <List dense={false}>
                {generate(
                  <ListItem sx={{}}>
                    <ListItemAvatar sx={{}}>
                      <Avatar>{/* <FolderIcon /> */}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="Secondary text"
                    />
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DisplayTeams;
