import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { colRef } from "./firebase";

import QRCode from "react-qr-code";
import { Container, Grid } from "@mui/material";

const SinglePage = () => {
  const [user, setUser] = useState<null | any>(null);
  const [docId, setDocId] = useState<null | any>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDocById = async () => {
      const docRef = doc(colRef, id);
      setDocId(docRef.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      }
    };

    fetchDocById();
  }, []);

  const style = {
    fontSize: 17,
    marginRight: 22,
  };
  const userStyle = {
    fontSize: 30,
    fontWeight: 25,
  };
  if (user === null) {
    return <>fetching</>;
  }

  return (
    <>
      <Container maxWidth="sm" style={{ marginBottom: "50px" }}>
        <h1
          style={{
            textTransform: "uppercase",
            paddingBottom: "20px",
            fontSize: "27px",
            letterSpacing: "5px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Users Details
        </h1>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          marginTop={7}
        >
          <Grid container direction="row" alignItems="center" spacing={4}>
            <Grid item xs={12}>
              <div style={userStyle}>
                <span style={style}>Name:</span>

                {user.data.name}
                <span style={{ marginLeft: "10px" }}>{user.data.lastName}</span>
              </div>
            </Grid>
            <Grid item>
              <span style={style}> Age:</span>
              {user.data.age}
            </Grid>
            <Grid item xs={12}>
              <span style={style}>Number :</span>
              {user.data.number}
            </Grid>
            <Grid item xs={9}>
              <span style={style}> Joining date: </span>
              {user.data.date}
            </Grid>
            <Grid item>
              <div style={{ background: "white", padding: "16px" }}>
                <QRCode size={150} value={docId} viewBox={`0 0 256 256`} />
                <div id="reader"></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default SinglePage;
