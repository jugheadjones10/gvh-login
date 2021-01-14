import React from 'react';
import TextField from '@material-ui/core/TextField';


function Amount({ className, formik }) {
    return (
        <TextField
            className={className}
            id="amount"
            {...formik.getFieldProps('amount')}
            label="Donation amount"
            variant="filled"
            error={formik.touched.amount && formik.errors.amount ? true : false}
            helperText={formik.touched.amount && formik.errors.amount ? formik.errors.amount : null} />
    );
}

export default Amount;