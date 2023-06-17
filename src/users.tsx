import { deleteDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import List from "@mui/material/List";
import { Link, ListItemText, ListItem, Container, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const deleteUserData = async (item: any) => {
    await deleteDoc(doc(colRef, item.key));
    console.log(item, "id hello");
  };
  return (
    <>
      <Container
        style={{ marginTop: "20px", marginBottom: "50px" }}
        maxWidth={"md"}
      >
        <h1
          style={{
            textTransform: "uppercase",
            paddingBottom: "30px",
            fontWeight: "lighter",
            letterSpacing: "5px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          All Users
        </h1>
        {allDocs.map((item) => (
          <List
            key={item.key}
            sx={{
              maxWidth: 370,
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
              <Button
                style={{ color: "black", marginRight: "12px" }}
                onClick={() => deleteUserData(item)}
              >
                <DeleteIcon />
              </Button>
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
