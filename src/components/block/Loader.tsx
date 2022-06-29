import React, {FC} from 'react';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader:FC = () => {
    return (
        <div className="loader">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
};

