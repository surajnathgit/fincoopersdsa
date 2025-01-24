import React, { useState } from "react";
import NavBar from "@/components/navigation";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import DSAForm from "@/components/dsaForm";
import ScrollToTop from "@/components/scrollToTop";


const NoBorderTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Removes the border
    },
  },
});

const Home = () => {
  const countryCodes = [
    { code: "+234", label: "Nigeria" },
    { code: "+91", label: "" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
  ];

  const opportunity = [
    {
      img: "/img/dealsofLoan.png",
      title: "DealsofLoan ",
      discription:
        "DealsofLoan is one of the largest Fintech lending aggregator platforms in India, our CRM system is integrated with multiple banks & NBFCs through which we can provide instant approvals & decisions.",
    },
    {
      img: "/img/dsa-payout-cycle.png",
      title: "DSA Payout Cycle ",
      discription:
        "Dealsofloan is committed to the faster process of Payout to our DSA’s, Our DSA Payout process with two ways daily instant and monthly basis, for monthly mode payout processing date is between the 25th to 30th of every month, we are a technology-based platform, it gives you a faster process in terms of Login to disbursement and the payout process.",
    },
    {
      img: "/img/dsa-partner-training.png",
      title: "DSA/Partner Training ",
      discription:
        "We have built consolidated product information available in all banks & NBFCs in various forms of training videos and handbooks for learning purposes available in the Help section in our CRM.",
    },
    {
      img: "/img/dsa-registration.png",
      title: "DSA Registration & NRM (Network Relationship Management) Team ",
      discription:
        "Once you fill the application form, our support team will guide you through the process, there is no charge, it's completely free for all. If you are a DSA, Freelancer, Chartered Accountant, Tax Consultant or Insurance Adviser. Our DSA program is for all, you can just generate leads or complete the login process our network support team provides you with dedicated support.",
    },
    {
      img: "/img/loan-dsa-process.png",
      title: "Loan DSA Process",
      discription:
        "It is very easy and simple for all. You just need to fill out the above form, post a complete digital KYC process and the virtual video training. Now through our system a dedicated RM will be allocated by system and now you are ready to login your first lead in our system, you will get a call from Dealsofloan’s Partner Care team, you will get CRM Training. Daily thousands of DOL Partners generate leads and earn a good amount of money every month.",
    },
  ];

  const hexagons = [
    "India's largest digital loan distributor, having presence in over 700 locations in India.",
    "DOL website was incepted in 2010, almost 10 years of successful journey in Indian online financial market with great market reputation, thousands of DSAs have been received payout from DOL timely.",
    "Create your digital store by building your network in CRM and activate the admin control feature.",
    "Advance algorithm & built-in bank wise policy parameters to get instant decisions.",
    "Opportunity to check instant eligibility from various banks/ NBFCs in a few minutes.",
    "Digital Application Processing system to process instantly and generate instant decisions from various banks/ NBFCs real time by self-service designed systems without taking support from the DOL team.",
    "Latest technology, APIs & notices solution-based CRM Engine ePartner Dashboard for our channel partners at free of cost.",
    "Advanced Lead filtering systems integrated with Equifax/ Credit Bureau, to get complete credit history and other credit information.",
  ];

  const slideData = [
    {
      discription: "Complete all fields of DSA Application and submit now",
      title: "Submission",
    },
    {
      discription: "Login with a registered Mobile Number using OTP.",
      title: "Mobile OTP",
    },
    {
      discription: "Complete your KYC process.",
      title: "Complete Process",
    },
    {
      discription: "Fill out Tell us more about you form.",
      title: "Fill Details",
    },
    {
      discription: "Checkout Training Videos, DSA Hand book for Product.",
      title: "Training",
    },
    {
      discription:
        "Know how the digital lead processing in various Banks/ NBFCs.",
      title: "Digital Leads",
    },
    {
      discription: "Add your leads and start earning.",
      title: "Start Earning",
    },
  ];

  const leadJourney = [
    {
      img: "/img/1.png",
      discription:
        "Take confirmation from the customer before starting a digital loan application, the customer may get OTP/ link from respective Bank/NBFCs or Dealsofloan for Credit Bureau generation requests.",
    },
    {
      img: "/img/2.png",
      discription:
        "Add basic lead detail & check your lead eligibility from available all banks/ NBFCS & submit now, checkout instant Eligible/Not Eligible status with reason",
    },
    {
      img: "/img/3.png",
      discription:
        "After checking the leads eligibility, complete all application fields as per the documents, correct and complete without error.",
    },
    {
      img: "/img/4.png",
      discription:
        "Select eligible bank and submit login in selected bank, get instant response as eligible/ not eligible/ under Process/ Soft Approved/ Reject in real time.",
    },
    {
      img: "/img/5.png",
      discription:
        "Upload customers' valid documents in PDF format, clean & Visible as per the bank wise required documents list.",
    },
    {
      img: "/img/6.png",
      discription:
        "Documents must be scanned properly, cropped and without having other background images and after checking properly submit now.",
    },
    {
      img: "/img/7.png",
      discription:
        "Track Application, if you have any credit query, complete the same, upload & submit. Get Hard Approved / Final Approval / Credit Reject with various reasons",
    },
    {
      img: "/img/8.png",
      discription:
        "Loan Application Disbursed from Bank/ NBFCs Track Payout Status & Got Paid as per the payout cycle digitally.",
    },
  ];

  const bankAndNBFC = [
    {
      img: "/img/bank-icon/kredit-bee.png",
      title: "KreditBee DSA Registration",
      discription:
        "Start your business sourcing for Fair cent for QR Code Based Loan for Personal Loans and Business Loans with DOL partner program for Pan India locations with the digital process",
    },
    {
      img: "/img/bank-icon/hdfc.png",
      title: "HDFC Bank DSA Registration & Process:",
      discription:
        "DSA registration available for HDFC bank for Personal loans, Business loans, where 100% digital process available. HDFC Bank is the largest commercial bank in India, HDFC enables digital loan processing over 1700 locations, we have end to end API integration, it allows us to process our leads real time and provide credit decisions the same day, if the documents are cleared and visible.",
    },
    {
      img: "/img/bank-icon/hdfc-cradit-card.png",
      title: "HDFC Bank Credit Card DSA Registration:",
      discription:
        "DOL brings you the unique opportunity for Credit card sourcing under fully digital process with HDFC Bank, start your business for Credit Card with DOL partner program.",
    },
    {
      img: "/img/bank-icon/sbi.png",
      title: "SBI Bank DSA registration:",
      discription:
        "DSA process is started with Dealsofloan for working with State Bank of India (SBI) DOL partner program to enable our all partners for Home Loans.SBI Bank DSA program is available to start loan customer sourcing and processing with Dealsofloan SBI partner program. A unique online SBI dsa registration program is the best affiliate program for all partners in India, earning a great amount of passive income and regular income.",
    },
    {
      img: "/img/bank-icon/bob.png",
      title: "Bank of Baroda DSA Registration:",
      discription:
        "Pan India DSA registration available for Bank of Baroda for housing loan with digital application process with DOL Partner App, Bank of Baroda is available with 5000 branches in Pan India. BOB is offering best home loan interest rates as well as a good payout range.",
    },
    {
      img: "/img/bank-icon/icici-bank.png",
      title: "ICICI Bank DSA registration:",
      discription:
        "DOL is a digital/physical partner with ICICI Bank, we are open for business with ICICI Bank for PL/BL/HL/LAP, now ICICI bank is also in a way of digital application process for PL/BL",
    },
    {
      img: "/img/bank-icon/punb.png",
      title: "PNB Housing DSA registration:",
      discription:
        "Start working with PNB housing for home loan & mortgage loan under dealsofloan unique partner program for Pan India locations with the exclusive payout range. Now DOL brings digital home loans with PNB housing for all customers in India with all eligibility programs.",
    },
    {
      img: "/img/bank-icon/axis-bank.png",
      title: "Axis Bank DSA registration online:",
      discription:
        "Online DSA registration available for Axis Bank. 4Start your home loan sourcing for Axis bank for Pan India locations with DOL partner program, get the best product program for home loan like Asha Home loan scheme with Axis bank.",
    },
    {
      img: "/img/bank-icon/aadhar-housing-finance.png",
      title: "Aadhar Housing Finance DSA registration:",
      discription:
        "Complete your registration with DOL partner program and start home loan business with Aadhar housing finance with Pan India locations and best support for business processing.",
    },
    {
      img: "/img/bank-icon/magma-et-reality.png",
      title: "Magma Housing DSA registration:",
      discription:
        "Start souring customers for Magma Housing finance & Magma Fincorp for home loan and mortgage loans with a unique partnership with Dealsofloan and serve your cash income customers.",
    },
    {
      img: "/img/bank-icon/federal-bank.png",
      title: "Federal Bank DSA Registration:",
      discription:
        "Federal bank is having a wide range of housing loan programs and available for serving with the partnership with DOL for across the country.",
    },
    {
      img: "/img/bank-icon/dhani-loan.png",
      title: "Indiabulls Dhani DSA registration:",
      discription:
        "start your instant disbursement with IndiaBulls Dhani loan with DOL Partner loan app/ system, get higher payout on disbursement, Pan India Location available with automated process.",
    },
    {
      img: "/img/bank-icon/piramal-finanace.png",
      title: "Piramal Housing DSA registration:",
      discription:
        "Piramal housing started its housing loan with a wide program range available for Pan India location with DOL partner program with higher payout slabs and centralized coordination.",
    },
    {
      img: "/img/bank-icon/kotak.png",
      title: "Kotak Mahindra DSA registration:",
      discription:
        "Available for physical application process for Pan India locations for Personal Loan & Business Loans with DOL Partner program, Kotak Marhindra bank is having a wide & competitive range of personal loan and business loan program.",
    },
    {
      img: "/img/bank-icon/lending-kart.png",
      title: "LendingKart DSA registration:",
      discription:
        "DOL partner program brings you a great opportunity with the partnership with LendingKart for Business Loans as Pan India locations, 1300 locations covered, complete digital process, best payout.",
    },
    {
      img: "/img/bank-icon/incred-finance.png",
      title: "Incred Finance DSA registration: ",
      discription:
        "Instant Personal loan for salaried customers are available with the partnership with Dealsofloan & Incred. Start your business for Incred Finance with DOL Partner with an automated process.",
    },
    {
      img: "/img/bank-icon/ujjivan-small-finance-bank.png",
      title: "Ujjivan Small Finance Bank DSA Registration:",
      discription:
        "Become part of digital loan journey for personal loan for Ujjivan Small Finance Bank with DOL partner program and earn great money by just sitting at your home or office digitally.",
    },
    {
      img: "/img/bank-icon/pay-sense.png",
      title: "Paysense DSA registration",
      discription:
        "Paysense Technology has opened with his own NBFC after the merger with PayU for PL/BL digitally in across the country digitally, started instant loan processing for Paysense with Dealsofloan Partner Program and earned best payout with minimum efforts.",
    },
    {
      img: "/img/bank-icon/smfg.png",
      title: "Fullerton India DSA Registration",
      discription:
        "Fullerton India is one of the best financial services company India, It is offering PL & BL business over 250 locations in India, available partial digital process, to start sourcing business for Fullerton India become DOL partner and grab this opportunity.",
    },
    {
      img: "/img/bank-icon/aditya-birla-capital.png",
      title: "Aditya Birla Capital (ABFL) DSA registration:",
      discription:
        "Fully digital PL & BL with instant decisioning, attractive loan eligibility policy and Pan India business, start sourcing for ABFL with DOL Partner Program and get best payout on digital loan journey where all types of employment are covered.",
    },
    {
      img: "/img/bank-icon/clix-capital.png",
      title: "Clix Capital DSA registration:",
      discription:
        "Earlier known as GE capital was doing small ticket personal loan and affordable housing loan, now started personal loan and business loan with digital process, complete your registration with DOL partner to start business with Clix Capital.",
    },
    {
      img: "/img/bank-icon/rbl-bank.png",
      title: "RBL Bank DSA Registration:",
      discription:
        "RBL bank offers instant personal loan eligibility digitally and posts soft approval physical documents that need to be submitted to the bank loan center. To start sourcing for RBL bank, join the DOL Partner program and get an opportunity to earn more.",
    },
    {
      img: "/img/bank-icon/upwards.png",
      title: "Upwards Fintech DSA Registration:",
      discription:
        "Fintech lending startup Upwards is offering at its service for online personal loan serving with DOL partner app, so big opportunity for all loan DSAs to process instantly and get live updates in app, nowadays digital market of loans is one of the growing market in India, it will help our partners to enhance business without manual work.",
    },
    {
      img: "/img/bank-icon/moneyview.png",
      title: "Upwards Fintech DSA Registration:",
      discription:
        "Fintech lending startup Upwards is offering at its service for online personal loan serving with DOL partner app, so big opportunity for all loan DSAs to process instantly and get live updates in app, nowadays digital market of loans is one of the growing market in India, it will help our partners to enhance business without manual work.",
    },
    {
      img: "/img/bank-icon/tata-capital.png",
      title: "Tata Capital DSA Registration:",
      discription:
        "Tata Capital is one of the trusted groups in India, Tata capital brings digital loan application processes in India for retail loan customers.",
    },
  ];

  const faqItems = [
    "How many loan products are covered under the Partner Program?",
    "Can I share another city that leads to Dealsflooan?",
    "Can I get Leads from Dealsflooan for Processing in my city?",
    "Can I login my leads to the bank directly without DOL team Support?",
    "How to get a DSA license from Dealsflooan?",
    "How do I take DSA/Loan Agency from Bank?",
    "How do I start a DSA business?",
    "What is the meaning of DSA in banking?",
    "What is the role of Loan Agent/DSA Partner?",
    "What is a Loan agent/DSA commission/Payout?",
    "How do I get a DSA credit card?",
    "Who is the No 1 direct selling company for Digital Loans?",
    "How much money do you need to open up a Corporate franchise?",
    "What business can I start with 25k to 50k?",
    "How can I start a franchise with no money or Free?",
    "What is a profit margin in Loan DSA?",
    "What is Indipe?",
    "What are the roles and responsibilities of an Indipe payment QR Sales executive?",
    "What is the QR onboarding process?",
  ];

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const affiliate = [
    {
      img: "/img/affiliate/youtubers-online-video.svg",
      title: "Youtubers or Online Video Content Creators",
    },
    {
      img: "/img/affiliate/online-payment-and-recharge.svg",
      title: "Online Payment & Recharge websites",
    },
    {
      img: "/img/affiliate/online-educational-website.svg",
      title: "Online Educational Websites & Apps",
    },
    {
      img: "/img/affiliate/facebook-page.svg",
      title: "Facebook Page Admins",
    },
    {
      img: "/img/affiliate/other-social-media-page.svg",
      title: "Other Social Media Page Admins",
    },
    {
      img: "/img/affiliate/degital-marketing.svg",
      title: "Digital Marketers",
    },
    {
      img: "/img/affiliate/multi-task-service-website.svg",
      title: "Multi services websites & apps",
    },
    {
      img: "/img/affiliate/payment-getway.svg",
      title: " Payment gateway companies",
    },
    {
      img: "/img/affiliate/hrms-services.svg",
      title: "HRMS service Providers",
    },
    {
      img: "/img/affiliate/other-online-services.svg",
      title: "Other Online Services Providers",
    },
    {
      img: "/img/affiliate/other-network-market.svg",
      title: "Other network marketers/ creators",
    },
  ];

  const affiliatePoints = [
    "Complete your registration online on Dealsofloan Bank DSA registration form available above on page.",
    "Complete your business profile details as per the given fields.",
    "Get ready to start lead generation through your marketing model or your affiliate network.",
    "Create a page for lead generation or content on your page about your loan products information.",
    " Start boosting your network and connecting people through your digital presence reach.",
    "Share your leads with DOL CRM or Partner app, you can avail API or UTM link to generate leads directly on your name from Dealsofloan.",
    "UTM link is the easier way to get complete lead data online from unlimited customers without your manual work.",
    "DOL will provide you with UTM links mapped with your code.",
    "Affiliate marketing websites india: Dealsofloan is the largest passive income provider financial technology based loan distribution company in India, more than 10000 affiliate marketers are earning passive income monthly basis.",
  ];

  const dealsofLoanAffiliate = [
    {
      img: "/img/benefits.svg",
      title: "Benefits",
      discription:
        "Unique affiliate marketing program offering great income option with minimal efforts, under this program marketers can earn lakhs of rupees monthly on a regular basis on almost zero cost with the use of your network base",
    },

    {
      img: "/img/features.svg",
      title: "Features",
      discription:
        " Dealsofloan is the unique in the market for offering the fully digital loan application process with various banks and nbfcs digitally, start from login to till disbursement",
    },

    {
      img: "/img/product-range.svg",
      title: "Product range",
      discription:
        "Dealsofloan brings you an Affiliate Marketing program to serve various financial loan products, insurance and cards from various banks and financial institutions digitally.",
    },
  ];

  return (
    <>
      <NavBar/>
      <Box
        sx={{
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(97.73deg, #0D2270 5%, #0082C6 61.24%)",
          color: "#ffffff",
         position: 'relative'
      
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body"
                sx={{ fontSize: "22px", fontWeight: "400", lineHeight: "70px" }}
              >
                Presenting New{" "}
              </Typography>
              <Typography
                variant="body"
                sx={{ fontSize: "40px", fontWeight: "700", mb: "20px" }}
              >
                Presenting New Partner Dashboard With Exciting Features
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Link
                  href="/home"
                  style={{
                    border: "2px solid #EBEAED",
                    backgroundColor: "#EBEAED",
                    borderRadius: "40px",
                    padding: "4px 20px",
                    color: "#0D2270",
                    fontWeight: "600",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Register Now{" "}
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "50%", height: "inherit" }}>
            <Image
              src="/img/home-svg.svg"
              alt="hero"
              width={2400}
              height={2020}
            />
          </Box>
        </Box>

        <Box sx={{position: 'absolute', bottom: '-10px', right: '0px', height: '40px', width: "100%", background: '#fafafc'}}></Box>

  
      </Box>

      <Box sx={{background: "#fafafc", padding: "4% 0"}}>
      <DSAForm/>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#344CA3F0",
          backgroundImage: "url('/img/home-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "end",
          color: "#ffffff",
          textAlign: "center",
          padding: "5% 0",
        }}
      >
        <Box>
          <Container>
            {/* Section 1 */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                marginBottom: "20px",
                fontSize: "22px",
                lineHeight: "35px",
              }}
            >
              Online Bank DSA Registration 2024
            </Typography>
            <Typography
              variant="body"
              sx={{ fontSize: "16px", lineHeight: "30px" }}
            >
              Online DSA Registration  for leading Banks, NBFCs & other digital
              lending companies is now free. Here you get the opportunity to
              source customers in different products & multiple locations in
              India virtually. We are open for Personal loans, Business loans,
              Credit Card, QR Code based loans, Personal Loan dsa , Business
              Loan dsa, Digital Saving Accounts, Digital Current accounts,
              Recurring Deposit with Gullakk brand and many more products. Also,
              get the opportunity to access the online leads available with us.
              We provide all types of loan product’s leads for your respective
              cities in India.
            </Typography>
          </Container>

          {/* Section 2 */}
          <Box
            sx={{
              marginTop: "40px",
              backgroundColor: "#ffffff17",
              padding: "20px",
              width: "100%",
              padding: "40px 0",
            }}
          >
            <Box sx={{ width: "59%", margin: "auto" }}>
              <Typography
                variant="body"
                sx={{
                  fontWeight: "550",
                  fontSize: "14px",
                  lineHeight: "30px",
                  fontStyle: "italic",
                }}
              >
                Bank DSA Registration is available for all banks including HDFC
                Bank, SBI, ICICI Bank, IDFC Bank, RBL Bank, Kotak Mahindra Bank,
                DCB Bank, MoneyView, YES Bank, Fullerton India, LendingKart,
                Faircent, IIFL Finance, KrediBee, InstaLoans – Dealsofloan and
                other major banks & NBFc in India.
              </Typography>
            </Box>
          </Box>

          <Container maxWidth="md" sx={{ marginTop: "80px" }}>
            {/* Section 3 */}
            <Typography variant="body1" sx={{ lineHeight: "30px" }}>
              Here is how we serve you the best in the market, become our Bank
              DSA Partner & join our Loan DSA Program 2024 Year. Dealsofloan is
              the largest DSA distribution network in India, so become our
              privileged partner and get the highest payout.
            </Typography>
          </Container>

          <Box sx={{ marginTop: "-10px" }}>
            <Typography
              variant="body"
              sx={{
                fontWeight: "700",
                opacity: 0.1,
                fontSize: "172px",
                fontStyle: "italic",
              }}
            >
              how we serve
            </Typography>
          </Box>
          <Container>
            {/* Features Section */}
            <Grid container spacing={2}>
              {[
                "70+ Banks/NBFCs integrated with us in over 600+ locations covered.",
                "Get the Opportunity to do all loan products through our platform.",
                "An exclusive CRM code-based instant digital loan business model.",
                "Dedicated RM support to enhance your business within the time.",
                "Unique digital login process through Freeno Dashboard.",
                "Build your own network, and get unlimited CRM/Freeno Dashboard login ID access.",
                "Add your staff or team members and they can add their connectors under their team.",
                "A highly transparent business model.",
                "Multilevel training program available for various loan products as well as CRM training.",
                "One CRM integrated with Multiple Banks/NBFC gives instant approvals from all in a single click.",
              ].map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      background: "#ffffff17",
                      padding: "10px 30px",
                      borderRadius: "40px",
                      display: "inline-block",
                    }}
                  >
                    {feature}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box sx={{ padding: "5% 0" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              marginBottom: "20px",
              fontSize: "24px",
              lineHeight: "35px",
              color: "#344CA3",
              textAlign: "center",
              width: "80%",
            }}
          >
            Opportunity to get a higher & Instant payout amount, open access to
            multiple banks & multiple products on a single platform.
          </Typography>

          <Grid container spacing={5} mt={2}>
            {opportunity.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Image src={item.img} alt={item.title} width={48} height={48} />

                <Typography
                  variant="h5"
                  sx={{
                    mt: 1,
                    fontWeight: "600",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#334CA7",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: "23px",
                    fontSize: "13px",
                    color: "#000000B2",
                  }}
                >
                  {item.discription}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          padding: "40px 0",
          display: "flex",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgba(108,94,157,1) 6%, rgba(116,92,145,1) 50%, rgba(118,78,127,1) 100%)",
          color: "#ffffff",
          filter: "url(#grainy)",
          position: "relative",
        }}
      >
        {/* SVG Filter Definition */}
        <svg width="0" height="0">
          <filter id="grainy">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
          </filter>
        </svg>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#E5E5E5",
          }}
        >
          <Container maxWidth="md">
            {/* Section 1 */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                fontSize: "22px",
                lineHeight: "35px",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              DSA Loan Agent Registration Online <br /> Program 2024
            </Typography>
          </Container>

          <Container
            maxWidth="md"
            sx={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Section 3 */}
            <Typography
              variant="body"
              sx={{ textAlign: "center", fontWeight: "bold", color: "#ffffff" }}
            >
              Online DSA Loan Agent Registration benefits
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: "30px", textAlign: "center" }}
            >
              DSA Loan agent registration online program available for Pan India
              locations, opportunity to earn highest payout, 100% digital
              process available, wide range of financial products with loans and
              credit cards, Digital Saving Account, Digital current Account, and
              many more services available for sourcing for DSA loan agents
              at Finexe and DOL CRM engine.
            </Typography>
          </Container>

          <Container maxWidth="md" sx={{ marginTop: "40px" }}>
            {/* Section 3 */}
            <Typography
              variant="body1"
              sx={{ lineHeight: "30px", textAlign: "center" }}
            >
              Lead Processing Model for DSA Loan Bank Agent Lead generation is
              very easy now with the advanced Finxex Dashboard this is one for
              all integrated web applications with various banks and financial
              institutions digitally, now generate leads, check instant eligible
              banks & select banks for login, submit an application and get
              decision real time, DSA can track, update, edit and delete their
              leads as an admin by itself.
            </Typography>
          </Container>

          <Container
            maxWidth="md"
            sx={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Section 3 */}
            <Typography
              variant="body"
              sx={{ textAlign: "center", fontWeight: "bold", color: "#ffffff" }}
            >
              Who can Start Loan DSA online
            </Typography>

            <Typography
              variant="body1"
              sx={{ lineHeight: "30px", textAlign: "center" }}
            >
              Anyone from any industry can come into Loan Business, generally
              people from Loan Industries are coming for DSAs, and some of them
              come from banking industries with junior/senior label experience.
              Below are given the basic examples of professions that can use a
              Loan DSA.
            </Typography>
          </Container>

          <Box sx={{ margin: "40px 0" }}>
            <Typography
              variant="body"
              sx={{
                fontWeight: "700",
                opacity: 0.1,
                fontSize: "70px",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Who can Start Loan DSA online
            </Typography>
          </Box>

          <Container>
            {/* Features Section */}
            <Grid container spacing={2}>
              {[
                "Network Marketing Agencies Agents",
                "Other business associates",
                "Digital Marketing Employees",
                "HR manager/ HR Executives",
                "Chartered Accountant",
                "Tax Consultant/ Tax Auditors",
                "Any other Employees",
                "Digital Marketing Companies",
                "Real Estate Agents",
                "Existing Bank Employees",
                "Ex. Bank Employees",
                "LIC or other Insurance Agent",
              ].map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={index}
                  sx={{ textAlign: "center" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      background: "#ffffff17",
                      padding: "5px 10px",
                      borderRadius: "40px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    {feature}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                margin: "80px auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body"
                sx={{
                  fontWeight: "550",
                  fontSize: "14px",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                In many more types of industries people can start the loan dsa
                business from home/ office, just need your dedication <br /> and
                commitment towards your vision
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-80px",
            width: "85%",
            background: "#ffffff",
            padding: "20px 0",
            borderRadius: "10px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "150px",
            boxShadow: "0px 0px 34px 0px #00000026",
            color: "#344CA3",
            filter: "none",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{ width: "70%", alignItems: "center" }}
          >
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  color: "#1E0E62",
                }}
              >
                Apply through the form above.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <NoBorderTextField
                size="small"
                type="email"
                fullWidth
                placeholder="Your email"
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    fontSize: "14px",
                    color: "#15143966",
                    border: "2px solid #EBEAED",
                    // backgroundColor: "#f5f5f5",
                  },
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "50px",
                  padding: "10px 30px",
                  backgroundColor: "#344CA3",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2d3c93",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "40px 0",
          background: "#FAFAFC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            marginBottom: "20px",
            fontSize: "22px",
            lineHeight: "35px",
            color: "#BDBDBD",
            textAlign: "center",
            margin: "80px 0",
          }}
        >
          Why Choose Dealsofloan as <br /> trusted Partner
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "1200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {hexagons.map((text, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "250px",
                  height: "280px",
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  boxShadow: "0px 0px 50px 0px #0000001A",
                  textAlign: "center",
                  position: "relative",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#1E0E62",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            marginBottom: "20px",
            fontSize: "22px",
            lineHeight: "35px",
            color: "#BDBDBD",
            textAlign: "center",
            margin: "80px 0",
          }}
        >
          Start Loan DSA Business online <br /> with Dealsofloan
        </Typography>
      </Box>



      <Box
        sx={{
          padding: "5% 0",
          height: "600px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: `radial-gradient(#00000014 2px, transparent 1px)`,
          backgroundSize: "20px 20px", // Adjust spacing between dots
          backgroundRepeat: "repeat",
          backgroundPosition: "top",
   
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "12px",
            lineHeight: "20px",
            color: "#263238",
            width: "42%",
            background: "#ffffff",
            display: "inline-block",
          }}
        >
          Start Loan DSA Business online with Dealsofloan Earlier it was very
          difficult because of the lots of critical process and regularisations,
          apart from hectic process work of to start a loan dsa is now very easy
          just because of Dealsofloan Loan DSA program, DOL brought a
          opportunity to become your own boss and start and set the loan dsa
          business successfully, checkout the step wise registration plan as per
          given below.
        </Typography>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }} 
        // scrollbar={{ draggable: true }}
        style={{ width: "100%", height: "100%", padding: "20px 0", marginTop: "40px" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slideData.map((item, index) => (
          <SwiperSlide key={index}>
          <Container maxWidth="xl">

          
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "#ffffff",
                boxShadow: "0px 0px 25px 0px #0000001A",
                borderRadius: "2px",
                padding: "20px",
                width: "100%",
                height: "140px",
                // marginBottom: "10%", 
                position:"relative"
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", fontWeight: "400", color: "#333334" }}
              >
                {item.discription}
              </Typography>
              <Typography
                variant="body"
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#0165A4",
                  mt: 1,
                }}
              >
                {item.title}
              </Typography>

              <Box sx={{position: "absolute", top:"122px", color: "#191919", zIndex: "999", fontSize: "70px" }}>
            __________________________________________________________________________________________
              </Box>

              <Box sx={{ position: "absolute", top: "197px", zIndex: "99",display: 'flex', flexDirection: "column", alignContent: "center"}}>
                <Box sx={{color: "#191919", textAlign:"center"}}>
                  <FiberManualRecordIcon/>
                </Box>

                <Box sx={{marginTop: "30px"}}>
                  <Typography variant="h1" sx={{fontSize: "60px", fontWeight: "800", lineHeight: "28px", color:"#D9D9D9", textAlign: "center"}}>
                    0{index+1}
                  </Typography>
                </Box>
              </Box>
            </Box>
            </Container>

          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
 

      <Box
        sx={{
          padding: "80px 0",
          display: "flex",
          justifyContent: "center",
          background: "#12309A",
          // backgroundImage: "url('/img/vector1.png')",
          // backgroundSize: "4515px 1120px",
          // backgroundRepeat: "no-repeat",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "-35px",
            left: "-450px",
            width: "200%",
            rotate: "350deg",
          }}
        >
          <img src="/img/vector1.png" alt="vector" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Checkout Your First Lead Generation Journey
          </Typography>

          <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
            {leadJourney.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <Box
                  sx={{
                    width: "10%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: index === 0 ? "none" : "flex" }}>
                    <img
                      src="/img/line.svg"
                      alt="line vector"
                      width={2}
                      height={80}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#FFFFFF33",
                      padding: "10px",
                      borderRadius: "50%",
                      height: "55px",
                      width: "55px",
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "start",
                    width: "80%",
                  }}
                >
                  <Box>
                    <img src={item.img} alt={index} width={30} height={30} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      fontSize: "14px",
                      lineHeight: "22px",
                      mt: 2,
                    }}
                  >
                    {item.discription}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "60px 0",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "35px",
              color: "#BDBDBD",
              textAlign: "center",
            }}
          >
            Bank / NBFCs wise Loan DSA registration Available
          </Typography>

          <Box sx={{ margin: "40px 0" }}>
            <img src="/img/qr-icon.svg" />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "30px",
                color: "#334CA7",
                mt: 2,
              }}
            >
              QR Code Based Loan DSA Registration: Introducing Indipe, 
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                lineHeight: "30px",
                color: "#000000",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              our newly launched merchant payment QR brand!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "#000000B2",
                fontWeight: "400",
                mt: 1,
              }}
            >
              Our merchants/shopkeepers can now experience smooth transactions
              and have the opportunity to be eligible for an instant business
              loan, a feature never before seen in the industry. Our product
              offers unique and interesting features to enhance the
              merchants/shopkeepar’s experience.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "#000000B2",
                fontWeight: "400",
              }}
            >
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Our
              payment QR Sales executives will play a vital role in making
              Indipe a success. At Deals Of Loan, we are committed to providing
              our partners with the latest and most innovative solutions to meet
              their needs. Indipe is a testament to our dedication towards this
              goal, and we are excited to bring it to the market. We believe
              that Indipe will revolutionize the payment QR industry and provide
              our partners with a seamless and hassle-free payment experience.
            </Typography>
          </Box>
          {bankAndNBFC.map((item, index) => (
            <Box sx={{ margin: "50px 0" }}>
              <Box sx={{ width: "18%" }}>
                <img src={item.img} alt={item.title} />{" "}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "26px",
                  color: "#334CA7",
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#000000B2",
                  fontWeight: "400",
                }}
              >
                {item.discription}
              </Typography>
            </Box>
          ))}
        </Container>

        <Box
          sx={{
            position: "absolute",
            bottom: "-80px",
            width: "80%",
            background: "#ffffff",
            padding: "20px 0",
            borderRadius: "10px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "150px",
            boxShadow: "0px 0px 34px 0px #00000026",
            color: "#344CA3",
            filter: "none",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{ width: "70%", alignItems: "center" }}
          >
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  color: "#1E0E62",
                }}
              >
                Apply through the form above.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <NoBorderTextField
                size="small"
                type="email"
                fullWidth
                placeholder="Your email"
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    fontSize: "14px",
                    color: "#15143966",
                    border: "2px solid #EBEAED",
                    // backgroundColor: "#f5f5f5",
                  },
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "50px",
                  padding: "10px 30px",
                  backgroundColor: "#344CA3",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2d3c93",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "50px 0",
          background: "#12309A",
          color: "#ffffff",
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            marginTop: "6%",
            marginBottom: "40px",
            fontSize: "24px",
          }}
        >
          Frequently Ask Questions
        </Typography>
        <Box
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#12309a",
            overflow: "hidden",
          }}
        >
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => handleAccordionChange(index)}
              sx={{
                backgroundColor: "#FFFFFF00",
                color: "#ffffff",
                boxShadow: "none",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <RemoveIcon sx={{ color: "#ffffff" }} />
                  ) : (
                    <AddIcon sx={{ color: "#ffffff" }} />
                  )
                }
                sx={{
                  backgroundColor: "#FFFFFF33",
                  borderBottom: "3px solid #12309A",
                  padding: "0 20px",
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                  },
                }}
              >
                <Typography>
                  {index + 1}. {item}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "10px 20px" }}>
                <Typography>
                  This is dummy text. Replace this with the actual answer for "
                  {item}" in the future.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          padding: "5% 0 10% 0",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#263238",
            textAlign: "center",
            lineHeight: "22px",
          }}
        >
          Affiliate Marketing Program with Dealsofloan
        </Typography>

        <Container maxWidth="md" sx={{ marginTop: "80px" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#263238",
              fontWeight: "400",
            }}
          >
            As we all knows to give money is always easier than to ask someone
            to invest money, so loan franchise business is huge profitable
            business, if we start as a single we can get margins up to 90% of
            payout collection, and with the team size it can be up to 50% - 60%
            margin from the total payout collection after all expenses.Affiliate
            Marketing Program with Dealsofloan.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#263238",
              mt: 5,
            }}
          >
            What is affiliate marketing?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#263238",
              fontWeight: "400",
              mt: 1,
            }}
          >
            The process of earning a passive income in the form of commission by
            referring some products of a company or brand is called affiliate
            marketing, commonly it can be used as a word refer and earn.
            Generally it is used by online products, now it is available with
            Dealsofloan to sell its various loans, credit cards, insurance,
            mutual funds etc in the India market with the opportunity of good
            passive commission income.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#263238",
              mt: 5,
            }}
          >
            How to do affiliate marketing for Loans, Insurance & Credit Cards
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#263238",
              fontWeight: "400",
              mt: 1,
            }}
          >
            Currently in a digital age, marketing & selling of a products or
            services is become more easier than earlier, everyone has good
            social media network and this network is the best platform to start
            your affiliate marketing business for loans, insurance, credit cards
            and mutual funds for various banks/NBFCs/ Companies in India with
            Dealsofloan, check out the steps to start with Dealsofloan.
          </Typography>
        </Container>

        <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#263238",
              }}
            >
              Who Can do Affiliate Marketing for Loans, Insurance & Credit
              Cards?
            </Typography>

            <Grid container spacing={5} sx={{ marginTop: "40px" }}>
              {affiliate.map((item, index) => (
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    height={195}
                    width={195}
                  />
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: "16px",
                      lineHeight: "28px",
                      fontWeight: "600",
                      color: "#263238",
                      mt: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Box
          sx={{
            position: "absolute",
            bottom: "-80px",
            width: "80%",
            background: "#ffffff",
            padding: "20px 0",
            borderRadius: "10px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9",
            height: "150px",
            boxShadow: "0px 0px 34px 0px #00000026",
            color: "#344CA3",
            filter: "none",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{ width: "70%", alignItems: "center" }}
          >
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  color: "#1E0E62",
                }}
              >
                Apply through the form above.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <NoBorderTextField
                size="small"
                type="email"
                fullWidth
                placeholder="Your email"
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    fontSize: "14px",
                    color: "#15143966",
                    border: "2px solid #EBEAED",
                    // backgroundColor: "#f5f5f5",
                  },
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "50px",
                  padding: "10px 30px",
                  backgroundColor: "#344CA3",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2d3c93",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "10% 0 5% 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          background:
            "linear-gradient(180deg, rgba(108,94,157,1) 6%, rgba(116,92,145,1) 50%, rgba(118,78,127,1) 100%)",
          color: "#ffffff",
          filter: "url(#grainy)",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "28px",
            lineHeight: "28px",
            color: "#ffffff",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          How to Start Affiliate Marketing with Dealsofloan?
        </Typography>

        <Container maxWidth="sm" sx={{ marginTop: "40px" }}>
          {affiliatePoints.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "110px",
                  fontWeight: "900",
                  color: "#ffffff40",
                  width: "10%",
                }}
              >
                {index + 1}
              </Typography>

              <Typography
                variant="boyd"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  color: "#ffffff",
                  width: "80%",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>

      <Box
        sx={{
          padding: "5% 0 10% 0",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontSize: "28px",
              lineHeight: "28px",
              color: "#263238",
              textAlign: "center",
            }}
          >
            Dealsofloan Affiliate Program
          </Typography>

          <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
            <Grid container spacing={2}>
              {dealsofLoanAffiliate.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#ffffff",
                      boxShadow: "0px 0px 44px 0px #00000026",
                      padding: "20px",
                      width: "395px",
                      height: "300px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      width={60}
                      height={60}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "36px",
                        color: "#263238",
                        textAlign: "center",
                        mt: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#263238",
                        textAlign: "center",
                        mt: 1,
                      }}
                    >
                      {item.discription}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-80px",
            width: "80%",
            background: "#ffffff",
            padding: "20px 0",
            borderRadius: "10px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9",
            height: "150px",
            boxShadow: "0px 0px 34px 0px #00000026",
            color: "#344CA3",
            filter: "none",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{ width: "70%", alignItems: "center" }}
          >
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  color: "#1E0E62",
                }}
              >
                Apply through the form above.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <NoBorderTextField
                size="small"
                type="email"
                fullWidth
                placeholder="Your email"
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    fontSize: "14px",
                    color: "#15143966",
                    border: "2px solid #EBEAED",
                    // backgroundColor: "#f5f5f5",
                  },
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "50px",
                  padding: "10px 30px",
                  backgroundColor: "#344CA3",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2d3c93",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ padding: "10% 0 5% 0", background: "#12309A" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "28px",
            lineHeight: "28px",
            fontWeight: "700",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Refer and Earn with Dealsofloan Partner App
        </Typography>

        <Container maxWidth="md" sx={{ marginTop: "3%" }}>
          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              Refer and earn mode
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#FFFFFFE5",
              }}
            >
              To refer a sales prospects to someone and get a commision income
              against the success of the leads is known as refer and earn model,
              DOL introduce this model for financial segments, under this model
              anyone can refer leads of any of loans, insurance, credit cards &
              mutual funds products through DOL partner app digitally.
            </Typography>
          </Box>

          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              From where to source referrals
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#FFFFFFE5",
              }}
            >
              We all are connected with a social network, it can be your friend
              circle, your relatives, your daily customers walkins on your shops
              for different purposes. Just think, our neighbors, friends and
              colleagues all take loans for personal needs, buying a home, car,
              furniture on loan from banks/ finance, these all are your
              referrals you can earn good passive income by referring these
              customers with us.
            </Typography>
          </Box>

          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              Refer and Earn App
            </Typography>

            <Typography
              variant="body"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#FFFFFFE5",
              }}
            >
              A unique Partner Mobile app developed by Dealsofloan team, this is
              the only app which is directly integrated with multiple banks
              digitally through API, with the help of technology we built this
              app with unique features like multiple bank eligibility algorithm,
              real time bank login in selective bank, real time decision, live
              application status tracking systems and till disbursement auto
              agreement generation and many more functions that make this app
              unique and advanced.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontStyle: "italic",
                  lineHeight: "24px",
                  color: "#FFFFFFE5",
                }}
              >
                Start asking for any kind of loans,insurance, credit cards or
                mutual funds services requirements and refer to the DOL Partner
                program with our app and complete the process of application.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              Refer and earn income
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#FFFFFFE5",
              }}
            >
              DOL partner refer and earn program is only a single program in the
              financial services industry who is offering a wide range of
              products and higher payout amount on the success of referral
              leads. We explain with some examples.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#FFFFFFE5",
                }}
              >
                Let's have a Personal Loan lead shared by one of our partners,
                and the lead is a disbursed amount of Rs.5 Lakhs, partner can
                earn up to Rs. 10000/- commission amount to our referrer. This
                is the best opportunity available in the market for all, so join
                the DOL partner refer and earn program and start earning now. To
                know more, register with us and we will get back to you.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <ScrollToTop/>
    </>
  );
};

export default Home;
