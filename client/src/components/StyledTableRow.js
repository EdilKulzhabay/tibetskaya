import { styled, TableRow } from "@mui/material";

const StyledTableRow = styled(TableRow)(({ selected }) => ({
  ...(!selected && {
    "&:nth-of-type(even)": {
      backgroundColor: "#f9f9f9",
    },
  }),
}));

export default StyledTableRow;
