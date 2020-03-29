import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export class DataForm extends Component {

    // const [selectedDate, setSelectedDate] = React.useState(new Date());

    handleDateChange = date => {
        this.props.handleDateChange(date);
    };

    next = e => {
        e.preventDefault();
        this.props.handleNext();
    }

    handleMediaChange = (selectorFiles : FileList, code) => {
        this.props.handleMediaChange(selectorFiles, code);
    }

    render() {
        
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Please, introduce the following data for your new route
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} style={{ marginTop: 16 }}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="routename"
                            onChange={handleChange('name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                required
                                variant="inline"
                                id="date"
                                name="date"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Date"
                                value={values.date}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Description"
                            multiline
                            fullWidth
                            rows="4"
                            variant="outlined"
                            onChange={handleChange('description')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="media-photo"
                            multiple
                            type="file"
                            onChange={(e) => this.handleMediaChange(e.target.files, 0)} //photos
                        />
                        <label htmlFor="media-photo">
                            <Button variant="contained" color="default" component="span" startIcon={<AddAPhotoIcon />}>
                                Photos
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <input
                            accept="video/*"
                            style={{ display: 'none' }}
                            id="media-video"
                            multiple
                            type="file"
                            onChange={(e) => this.handleMediaChange(e.target.files, 1)} //videos
                        />
                        <label htmlFor="media-video">
                            <Button variant="contained" color="default" component="span" startIcon={<CloudUploadIcon />}>
                                Videos
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12}>
                        <FormHelperText id="my-helper-text">Fields marked with (*) are mandatory.</FormHelperText>
                    </Grid>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.next}
                        style={{
                            marginTop: 12,
                            marginLeft: 'auto'
                        }}

                    >
                        Next
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }
}

export default DataForm
