import React, { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, InputAdornment } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "@/components/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";

const Background = styled('div')({
  minHeight: '100vh',
  background: 'radial-gradient(circle, rgba(173, 216, 230, 1) 0%, rgba(0, 0, 139, 1) 100%)', // Ortası açık mavi, kenarlara gittikçe koyulaşan mavi gradient
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '-1',
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '-1',
});

const ContentWrapper = styled('div')({
  position: 'relative',
  zIndex: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Card = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '15px',
  padding: '2rem',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(10px)',
  maxWidth: '400px',
  width: '100%',
  margin: '20px',
});

const CustomButton = styled(Button)({
  padding: '12px 20px',
  backgroundColor: "#1c3d73",
  color: "white",
  "&:hover": {
    backgroundColor: "#162e59",
  },
  borderRadius: '20px',
});

const CustomTextField = styled(TextField)({
  marginBottom: '20px',
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#e0f7fa",
    "&.Mui-focused": {
      backgroundColor: "#b2ebf2",
    },
  },
  "& .MuiInputLabel-outlined": {
    color: "#00838f",
  },
});

const Index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState({ email: "", password: "" });
  const [users, setUsers] = useState([
    { email: "Hazar Güçtekin", password: "hazar123" },
    { email: "ahmet123", password: "ahmet123" },
    { email: "Level Cuhacı", password: "levent123" },
    { email: "Emel Yavuz", password: "emel123" },
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    const foundUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (foundUser) {
      console.log("Giriş yapılıyor:", user);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Giriş başarılı!");
      router.push("/"); // Ana sayfaya yönlendirme
    } else {
      alert("Kullanıcı bulunamadı, lütfen üye olun.");
    }
  };

  const handleRegister = () => {
    setUsers([...users, user]);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Kayıt yapılıyor:", user);
    alert("Kayıt başarılı!");
    router.push("/");
  };

  return (
    <>
      <Background />
      <Overlay />
      <div className="sticky top-0 z-50 bg-white shadow-lg">
        <Header />
      </div>
      <ContentWrapper>
        <Card>
          <div className="flex justify-center">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="Login tabs"
              className="bg-white rounded-lg shadow-md"
              TabIndicatorProps={{
                style: { backgroundColor: '#1c3d73' },
              }}
            >
              <Tab label="Giriş Yap" className="text-blue-900 font-bold" />
              <Tab label="Üye Ol" className="text-blue-900 font-bold" />
            </Tabs>
          </div>

          {activeTab === 0 ? (
            <div className="mt-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-900">Hoş Geldiniz</h2>
                <p className="text-lg">Hesabınıza giriş yapın ve alışverişe başlayın</p>
              </div>

              <CustomTextField
                variant="outlined"
                placeholder="Kullanıcı Adı"
                fullWidth
                name="email"
                value={user.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                variant="outlined"
                placeholder="Şifre"
                type="password"
                fullWidth
                name="password"
                value={user.password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomButton
                fullWidth
                variant="contained"
                onClick={handleLogin}
              >
                Giriş Yap
              </CustomButton>
            </div>
          ) : (
            <div className="mt-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-900">Merhaba,</h2>
                <p className="text-lg">Caspy'de alışveriş yapmak için hemen bir hesap oluştur!</p>
              </div>

              <CustomTextField
                variant="outlined"
                placeholder="E-posta"
                fullWidth
                name="email"
                value={user.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                variant="outlined"
                placeholder="Şifre"
                type="password"
                fullWidth
                name="password"
                value={user.password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomButton
                fullWidth
                variant="contained"
                onClick={handleRegister}
              >
                Üye Ol
              </CustomButton>
            </div>
          )}
        </Card>
      </ContentWrapper>
    </>
  );
};

export default Index;
