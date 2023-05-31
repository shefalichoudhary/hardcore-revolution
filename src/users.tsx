import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import List from "@mui/material/List";
import { Link, ListItemText, ListItem, Container, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Users() {
  const [allDocs, setAllDocs] = useState<any[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data: any[] = [];
      const querySnapshot = await getDocs(colRef);

      querySnapshot.forEach((doc) => {
        data.push({
          ...doc.data(),
          key: doc.id,
        });

        setAllDocs(data);
      });
    };
    fetchUsers();
  }, []);
  console.log(allDocs, "w0rld");

  return (
    <>
      <Container maxWidth={"md"}>
        <h1
          style={{
            textTransform: "uppercase",
            paddingBottom: "30px",
            fontWeight: "lighter",
            letterSpacing: "5px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          All Users
        </h1>
        {allDocs.map((item) => (
          <List
            key={item.key}
            sx={{
              maxWidth: 338,
              bgcolor: "background.paper",
              justifyContent: "center",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <AccountCircleIcon sx={{ fontSize: 50 }} />
              </ListItemAvatar>
              <ListItemText
                primary={item.data.name}
                secondary={item.data.lastName}
              />
              <Link
                style={{ color: "rgba(0, 0, 0, 0.9)" }}
                href={`/user/${item.key}`}
              >
                <ArrowForwardIosIcon />
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </Container>
    </>
  );
}
