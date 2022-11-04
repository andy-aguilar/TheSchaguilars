import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel: FunctionComponent<TabPanelProps> = ({
  children,
  index,
  value,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1, maxHeight: 350, overflow: "scroll" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
