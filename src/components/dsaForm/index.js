import React from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)({
  marginTop: "2rem",
  padding: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const StyledSectionTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "1rem",
  color: "#333",
});

const StyledSubTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: "1rem",
  marginBottom: "0.5rem",
  marginTop: "1rem",
  color: "#333",
});

const StyledFieldGroup = styled(Box)({
  marginBottom: "2rem",
});

const DSAForm = () => {
  return (
    
    <Container maxWidth="md" sx={{ background: "#ffffff", padding: '40px', borderRadius: "8px" }}>
    
      <Typography variant="h5" textAlign="center"  mb={3}  sx={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#263238",
              textAlign: "center",
              marginBottom: "5%",
            }}>
        Direct Sales Associate (DSA) Empanelment Form
      </Typography>
      <form>
        {/* Section 1: Basic Information */}
        <StyledSectionTitle>1. Basic Information</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name of the DSA" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Business Name (if applicable)" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Type of Entity"
                placeholder="e.g., Individual, Partnership, Company, NGO"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="PAN" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="GST" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Registration Number" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date of Establishment"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Contact Person" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Designation" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Phone Number" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Email Address" />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}> 
                ↪ Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} label="Office Address" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Correspondence Address (if different)"
              />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 2: Experience and Expertise */}
        <StyledSectionTitle>2. Experience and Expertise</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Experience in Rural Financing:</Typography>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Years of Experience" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Type of Services Provided"
              />
            </Grid>
            <Grid item xs={12}>
            <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Previous / Current Clients
              </Typography>
              <Typography variant="body2" sx={{ color: "#000000b0"}}>(List major clients or organizations worked with, 2 ref needed)</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={1}
                label="Previous/Current Client 1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={1}
                label="Previous/Current Client 2"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Expertise in Financial Products:</Typography>
              <Box>
                {["HL", "LAP", "MSME", "PL", "VL", "CV", "CE", "Agri"].map(
                  (type) => (
                    <FormControlLabel
                      key={type}
                      control={<Checkbox />}
                      label={type}
                    />
                  )
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Experience with Specific Loan Types"
                placeholder="e.g., microloans, agriculture loans"
              />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 3: Geographical Coverage */}
        <StyledSectionTitle>3. Geographical Coverage</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            {/* Regions/Circles Covered */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Regions/Circles Covered"
                placeholder="List specific states, districts or villages where the DSA operates"
              />
            </Grid>

            {/* Number of Rural Areas/Communities Served */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Number of Rural Areas/Communities Served"
              />
            </Grid>

           <Grid item xs={12}>
           <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Local knowledge
              </Typography>
            </Grid> 

            {/* Understanding of Local Language */}
            <Grid item xs={12}>
              <Typography>Understanding of Local Language:</Typography>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            {/* Existing Relationships with Community Leaders/Organizations */}
            <Grid item xs={12}>
              <Typography>
                Existing Relationships with Community Leaders/Organizations:
              </Typography>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 4: Operational Capacity */}
        <StyledSectionTitle>4. Operational Capacity</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
          <Grid item xs={12}>
           <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Infrastructure
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Office Location(s)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Availability of Technology (e.g., digital tools, mobile apps)"
              />
            </Grid>
            <Grid item xs={12}>
           <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Staffing
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <TextField fullWidth label="Number of Field Agents" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Qualifications and Training of Staff"
              />
            </Grid>
            <Grid item xs={12}>
           <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Suport Mechanisms
              </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Typography>Client Support Services:</Typography>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Training and Educational Programs Provided to Borrowers:
              </Typography>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Loan Recovery Strategies: List at least 3"
              />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 6: Financial Performance */}
        <StyledSectionTitle>6. Financial Performance</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Annual Turnover" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Financial Documents"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Cancelled Cheque" />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterTop sx={{fontSize: '16px', fontWeight: '600', color: "#000000b0"}}>
                ↪ Account Details
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Bank Name & Branch" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Account Number" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="IFSC" />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 7: References */}
        <StyledSectionTitle>7. References</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography fontWeight="bold" gutterBottom>
                References from Financial Institutions/Partners:
              </Typography>
            </Grid>

            {/* Reference 1 */}
            <Grid item xs={12}>
              <Typography fontWeight="bold">1.</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Contact Information" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Relationship" />
            </Grid>

            {/* Reference 2 */}
            <Grid item xs={12}>
              <Typography fontWeight="bold">2.</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Contact Information" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Relationship" />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 8: Additional Information */}
        <StyledSectionTitle>8. Additional Information</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Certifications or Accreditations" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Awards or Recognitions" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Any Other Relevant Information"
              />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Section 9: Declaration */}
        <StyledSectionTitle>9. Declaration</StyledSectionTitle>
        <StyledFieldGroup>
          <Typography>
            I/We hereby declare that the information provided in this form is
            accurate and complete to the best of my/our knowledge. I/We agree to
            adhere to all the guidelines and requirements set forth by the
            financial institution and regulatory authorities.
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Designation" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Signature" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Instructions for Submission */}
        <StyledSectionTitle>Instructions for Submission</StyledSectionTitle>
        <StyledFieldGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                1. Complete Form: Fill out all sections of the form in detail.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                2. Attach Documents: Include necessary supporting documents such
                as registration certificates, financial statements, and
                references.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                3. Submit: Send the completed form along with attachments to the
                designated contact person or office.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography fontWeight="bold" mt={2}>
                Contact for Queries @ HO Fin Coopers:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Phone Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email Address" />
            </Grid>
          </Grid>
        </StyledFieldGroup>

        {/* Submission Buttons */}
        <Divider sx={{ my: 3 }} />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
      
    </Container>

  );
};

export default DSAForm;
