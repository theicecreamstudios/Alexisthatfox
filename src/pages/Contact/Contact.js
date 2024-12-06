// import React, { useState } from "react";
// import styles from "./Contact.module.css";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// import FoxyButton from "../../components/FoxyButton/FoxyButton";
// import { useDataCustomHook } from "../../Data/data";

// const Contact = () => {
//   const data = useDataCustomHook();
//   const {
//     contact: { img, initialState, forms, btnText },
//   } = data;
//   const [state, setState] = useState(initialState);

//   const handleChange = (event, name) => {
//     const value = event.target.value;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("STATE::::", state);
//     setState(initialState);
//   };

//   return (
//     <div className={styles.Contact}>
//       <CssBaseline />
//       <Container maxWidth="xl">
//         <Box sx={{ position: "relative" }}>
//           <Box
//             sx={{
//               height: { xs: "17vh", md: "25vh" },
//               bgcolor: "#cfe8fc",
//               width: "100%",
//               backgroundImage: `url(${img})`,
//             }}
//           ></Box>
//           <Box
//             sx={{
//               width: { xs: "90%", lg: "50%" },
//               background: "white",
//               p: 1,
//               m: "auto",
//               zIndex: 10,
//               mt: { xs: "-7vh", md: "-10vh" },
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundColor: "#955B35",
//                 color: "white",
//                 p: 3,
//               }}
//             >
//               {forms.map((el) =>
//                 el.formType === "input" ? (
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "flex-start",
//                       alignItems: "end",
//                       mt: 4,
//                     }}
//                     key={el.name}
//                   >
//                     <Typography
//                       variant="body2"
//                       sx={{ mr: 1, fontFamily: "KollektifBold" }}
//                     >
//                       {el.label}
//                     </Typography>
//                     <TextField
//                       id="standard-basic"
//                       variant="standard"
//                       multiline={el.multiline}
//                       rows={el.rows}
//                       sx={{
//                         color: "white",
//                         fontFamily: "KollektifBold",
//                         flexGrow: 1,
//                         "& .MuiInput-underline:before": {
//                           borderBottomColor: "white !important", // Change border bottom color to white
//                         },
//                         "& .MuiInput-underline.Mui-focused:after": {
//                           borderBottomColor: "white !important", // Change border bottom color to white on focus
//                         },
//                         "& .MuiInputBase-input": {
//                           color: "white !important", // Change text input color to white
//                         },
//                         "& .MuiInputBase-input:focus": {
//                           color: "white !important", // Change text input color to white on focus
//                         },
//                       }}
//                       onChange={(event) => handleChange(event, el.name)}
//                     />
//                   </Box>
//                 ) : (
//                   <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         mt: 1,
//                         fontFamily: "KollektifBold",
//                         textAlign: "center",
//                       }}
//                     >
//                       {el.label}
//                     </Typography>
//                     <FormControl
//                       variant="standard"
//                       sx={{ m: 1, minWidth: 120 }}
//                     >
//                       <Select
//                         labelId="demo-simple-select-standard-label"
//                         id="demo-simple-select-standard"
//                         value={state.interest}
//                         onChange={(event) => handleChange(event, el.name)}
//                         label="Age"
//                         sx={{
//                           color: "white",
//                           fontFamily: "KollektifBold",
//                           ".MuiSvgIcon-root ": {
//                             fill: "white !important",
//                           },
//                           "&.MuiSelect-root:before": {
//                             borderBottomColor: "white !important",
//                           },
//                           "& .MuiInputBase-input": {
//                             color: "white !important", // Change text input color to white
//                           },
//                           "& .MuiInputBase-input:focus": {
//                             color: "white !important", // Change text input color to white on focus
//                           },
//                         }}
//                       >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {el.options.map((opt) => (
//                           <MenuItem
//                             value={opt}
//                             sx={{ fontFamily: "Kollektif" }}
//                             key={opt}
//                           >
//                             {opt}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Box>
//                 )
//               )}

//               <Box sx={{ textAlign: "center", mt: 10 }}>
//                 <FoxyButton
//                   fullWidth={false}
//                   variant="contained"
//                   label={btnText}
//                   backgroundColor={"#312813"}
//                   hoverBackgroundColor={"#312813"}
//                   height={"initial"}
//                   onClick={handleSubmit}
//                   sx={{
//                     width: 250,
//                     borderRadius: 5,
//                     fontSize: 20,
//                     color: "white",
//                     fontWeight: 700,
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const OverlayContactForm = () => {
  return (
    <Box
      position="relative"
      display="inline-block"
      width="400px"
      height="300px"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        component="img"
        src=""
        alt="Background"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay Form */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="rgba(0, 0, 0, 0.6)" // Semi-transparent dark overlay
        color="white"
        p={2} // Padding around the form
      >
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={2}
          width="100%"
          maxWidth="300px"
        >
          <Typography variant="h6" component="div" textAlign="center" mb={1}>
            Contact Us
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", borderColor: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", borderColor: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white", borderColor: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OverlayContactForm;
