import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

const columns = [
    { field: 'object', headerName: 'Produkt', width: 130 },
    { field: 'description', headerName: 'Beschreibung / Anzahl', width: 130 },
];

const rows = [
    { id: 1, object: 'Bargeld', description: 'Jon'},
    { id: 2, object: 'Bargeld', description: 'Jon'},

];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Geld & Finanzen
            </Typography>

            <DataGrid
                checkboxSelection
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}

            />
        </div>
    );
}