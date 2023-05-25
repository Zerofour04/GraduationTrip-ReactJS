import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns2 = [
    { field: 'product', headerName: 'Produkt', width: 200 },

    {
        field: 'count',
        headerName: 'Anzahl',
        type: 'number',
        width: 130,
    },
    { field: 'info', headerName: 'Zusatzinfo', width: 350 },

];

const rows2 = [
    { id: 1, product: 'ADAC Unterlagen', info: '', count: 1 },
    { id: 2, product: 'Krankenversicherung', info: '', count: 1 },
    { id: 3, product: 'Impfausweis/ Allergiepass', info: '', count: 1 },
    { id: 4, product: 'Personalausweis/Reisepass', info: '', count: 1 },
    { id: 5, product: 'Bargeld', info: 'etwa 300€ sollten reichen', count: 1 },
    { id: 6, product: 'EC-Karte', info: 'am besten in einem Geheimfach', count: 1 },
    { id: 7, product: 'Nummer', info: 'Notfall-Telefonnummern', count: 1 },

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
                Am Wichtigsten:
            </Typography>
            <DataGrid
                rows={rows2}
                columns={columns2}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}

                checkboxSelection
            />


        </div>


    );
}