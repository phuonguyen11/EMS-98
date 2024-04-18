import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, Stack, Typography, useMediaQuery, TextField, Avatar } from '@mui/material';
import AuthWrapper1 from '../AuthWrapper1';
import AuthFooter from 'ui-component/cards/AuthFooter';
import SettingCardWrapper from '../SettingCardWrapper';
import { updateProfileInformation, updateProfileImage } from '../../../../hooks/updateProfileData';
import React, { useState, useEffect } from 'react'; 
import { auth } from '../../../../services/firebase';
import { loadData } from 'hooks/loadUserData';
// ================================|| ACCOUNT SETTINGS ||================================ //

const AccountSettings = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const data = await loadData(currentUser);
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
  
    fetchUserData();
  }, [auth.currentUser]);

  const handleProfileInformationSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileInformation(e, auth.currentUser); 
      console.log('Profile information updated successfully');
    } catch (error) {
      console.error('Error updating profile information:', error);
    }
  };

  const handleProfileImageSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfileImage(e, auth.currentUser); 
      console.log('Profile image updated successfully');
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  };

  if (!userData) return null; 
  return (
    <AuthWrapper1>
      <SettingCardWrapper>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} sm={6}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
                      <Grid item sx={{ mb: 2 }}>
                        <Avatar alt="User Avatar" src={userData.image} sx={{ width: 200, height: 200 }} />
                      </Grid>
                      <form onSubmit={handleProfileImageSubmit}>
                        <input type="file" accept="image/*" id="file" name="file" />
                        <Button type="submit" variant="contained" color="primary">Update Profile Image</Button>
                      </form>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container direction="column">
                      <Stack alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 8 }}>
                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h0' : 'h1'}>
                          Account Settings
                        </Typography>
                        <Typography variant="subtitle1" color={theme.palette.secondary.main} gutterBottom align="center">
                          Update your account information here
                        </Typography>
                      </Stack>
                      <form onSubmit={handleProfileInformationSubmit}>
                        <TextField id="fullName" label="Full Name" defaultValue={userData.name} fullWidth sx={{ mb: 3 }} />
                        <TextField id="email" label="Email" defaultValue={userData.email} fullWidth sx={{ mb: 3 }} />
                        <TextField id="password" label="Password" defaultValue={userData.password} fullWidth sx={{ mb: 3 }} />
                        <TextField id="phoneNumber" label="Phone Number" defaultValue={userData.phoneNumber} fullWidth sx={{ mb: 3 }} />
                        <TextField id="identityCard" label="Identity Card" defaultValue={userData.identityCard} fullWidth sx={{ mb: 3 }} />
                        <TextField id="address" label="Address" defaultValue={userData.address} fullWidth sx={{ mb: 3 }} />
                        <Button type="submit" variant="contained" color="primary">Update Information</Button>
                      </form>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            <AuthFooter />
          </Grid>
        </Grid>
      </SettingCardWrapper>
    </AuthWrapper1>
  );
};

export default AccountSettings;
