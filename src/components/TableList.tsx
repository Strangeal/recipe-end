import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";

type tableListProps = {
  ingredient: {
    Ing: string;
    quantity: string;
  }[];
};
const TableList = ({ ingredient }: tableListProps) => {
  const [value, setValue] = useState(0);

  const handleChnage = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChnage}>
          <Tab label="Recipe Ingrediants" />
          <Tab label="Video Instructions" />
        </Tabs>
      </Box>

      {value === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TableContainer>
            <Table>
              <TableBody>
                {ingredient.map((td, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ p: 1, borderBottom: "none" }}>
                      <CheckBox />
                    </TableCell>
                    <TableCell sx={{ p: 1, borderBottom: "none" }}>
                      {td.Ing}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                        width: 120,
                        textAlign: "right",
                      }}
                    >
                      {td.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {value === 1 && (
        <>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kwq4vl610iY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
};

export default TableList;
