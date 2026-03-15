"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import SplitAbout from '@/components/sections/about/SplitAbout';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { CheckCircle, Award, BookOpen, Users, Globe, Sparkles, Star, Zap, TrendingUp, Crown } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="F.C Trading Academy"
          navItems={[
            { name: "About", id: "about" },
            { name: "Programs", id: "pricing" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Global Trading Community"
          bottomRightText="+2349017049227"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Learn Professional Trading & Build Financial Freedom"
          description="Join over 100+ successful students learning proven trading strategies at F.C Trading Academy. Master Forex, cryptocurrencies, and stock markets with expert mentorship from industry professionals."
          background={{ variant: "gradient-bars" }}
          testimonials={[
            {
              name: "Adekunle M.",              handle: "@adekunle_trader",              testimonial: "F.C Trading Academy completely transformed my understanding of forex trading. The strategies are practical and immediately applicable.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-an-african-fema-1773591630609-7bda5274.png",              imageAlt: "Adekunle, successful trader"
            },
            {
              name: "Chen Liu",              handle: "@chentrader",              testimonial: "The mentorship program gave me the confidence to start trading professionally. Best investment in my financial education.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-an-asian-male-t-1773591630967-a789adb2.png",              imageAlt: "Chen, professional trader"
            }
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          tag="Start Your Trading Journey"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Enroll Now", href: "#pricing" },
            { text: "Chat on WhatsApp", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" },
            { text: "Join Community", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
          ]}
          buttonAnimation="blur-reveal"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-an-african-fema-1773591630609-7bda5274.png", alt: "Student avatar 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-an-asian-male-t-1773591630967-a789adb2.png", alt: "Student avatar 2" }
          ]}
          avatarText="100+ successful traders"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/a-modern-professional-trading-dashboard--1773591632052-a6ff766d.png"
          imageAlt="Trading dashboard with diverse professionals"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About F.C Trading Academy"
          description="F.C Trading Academy equips aspiring traders with professional strategies used in the global financial markets. Founded by CEO Oluwaseyi Oginni, we've trained over 100+ successful traders in Forex, crypto, stocks, and advanced market analysis."
          tag="Expert Mentorship"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Learn More", href: "#features" },
            { text: "Contact CEO", href: "tel:08112185706" }
          ]}
          buttonAnimation="blur-reveal"
          bulletPoints={[
            {
              title: "Professional Trading Mentorship",              description: "Direct guidance from experienced traders with proven track records in live markets",              icon: Award
            },
            {
              title: "Beginner to Advanced Training",              description: "Comprehensive curriculum from forex fundamentals to institutional trading strategies",              icon: BookOpen
            },
            {
              title: "100+ Trained Students",              description: "Join a growing community of successful traders earning consistent returns",              icon: Users
            },
            {
              title: "Global Market Education",              description: "Learn trading strategies used by professional traders worldwide",              icon: Globe
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-portrait-of-oluwaseyi-oginn-1773591631237-1669e166.png"
          imageAlt="CEO Oluwaseyi Oginni, Founder of F.C Trading Academy"
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Trading Programs"
          description="Choose the perfect program for your trading journey. All programs include lifetime access to materials and community support."
          tag="Special Pricing"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "View All Programs", href: "#features" }
          ]}
          buttonAnimation="blur-reveal"
          plans={[
            {
              id: "beginner",              badge: "Popular",              badgeIcon: Star,
              price: "$199",              subtitle: "Perfect for traders just starting out",              buttons: [
                { text: "Enroll Now", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
              ],
              features: [
                "Forex fundamentals & trading basics",                "Technical analysis mastery",                "Risk management strategies",                "Trading psychology foundation",                "Community access",                "Lifetime material updates"
              ]
            },
            {
              id: "advanced",              badge: "Advanced",              badgeIcon: Sparkles,
              price: "$299",              subtitle: "For experienced traders ready to scale",              buttons: [
                { text: "Join Program", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
              ],
              features: [
                "Market structure analysis",                "Institutional trading concepts",                "Advanced entry & exit strategies",                "Live trading sessions (2x/week)",                "Professional trader network",                "Strategy refinement support"
              ]
            },
            {
              id: "vip",              badge: "Exclusive",              badgeIcon: Crown,
              price: "$399",              subtitle: "Premium mentorship & guidance",              buttons: [
                { text: "Apply for Mentorship", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
              ],
              features: [
                "Private 1-on-1 mentorship",                "Weekly live trading sessions",                "Advanced market breakdown analysis",                "Direct mentor support (24/7)",                "Personalized trading plan",                "Portfolio performance tracking"
              ]
            }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Why Choose F.C Trading Academy"
          description="We combine proven trading strategies with personalized mentorship to accelerate your journey from beginner to profitable trader."
          tag="Expert Training"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Learning", href: "#pricing" }
          ]}
          buttonAnimation="blur-reveal"
          features={[
            {
              id: "proven-strategies",              title: "Proven Trading Strategies",              description: "Learn strategies that work in real market conditions, tested by professional traders with consistent profits",              tag: "Tested Methods",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/advanced-trading-strategy-visualization--1773591631424-de9035fe.png",              imageAlt: "Advanced trading strategy analysis"
            },
            {
              id: "live-sessions",              title: "Live Market Sessions",              description: "Join real-time trading sessions where you see professional traders executing strategies in live markets",              tag: "Real Market Action",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/advanced-trading-strategy-visualization--1773591631424-de9035fe.png",              imageAlt: "Live market trading session"
            },
            {
              id: "beginner-friendly",              title: "Beginner Friendly Training",              description: "Start from zero trading knowledge. Our curriculum progressively builds your skills step by step",              tag: "Easy Start",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/visual-representation-of-beginner-tradin-1773591631548-4200baaf.png",              imageAlt: "Beginner trading course materials"
            },
            {
              id: "mentorship",              title: "Professional Mentorship",              description: "Get guidance from experienced traders who have profited consistently in multiple market conditions",              tag: "Expert Guidance",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/mentorship-session-visualization-showing-1773591631981-b8755c5e.png",              imageAlt: "One-on-one mentorship session"
            },
            {
              id: "community",              title: "Global Trading Community",              description: "Connect with 100+ traders worldwide, share insights, and grow together in our supportive community",              tag: "Network Growth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/advanced-trading-strategy-visualization--1773591631424-de9035fe.png",              imageAlt: "Global trading community"
            },
            {
              id: "support",              title: "Ongoing Support",              description: "24/7 support through WhatsApp community and direct mentor assistance for all your trading questions",              tag: "Always Available",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/modern-contact-form-interface-visualizat-1773591631866-d86f1d19.png",              imageAlt: "Support and community chat"
            }
          ]}
          carouselMode="buttons"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Success Stories from Our Students"
          description="Real traders, real results. Hear from our community members who've transformed their financial futures"
          tag="100+ Success Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "Join Our Community", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
          ]}
          buttonAnimation="blur-reveal"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              role: "Professional Trader",              company: "Independent",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-portrait-of-a-south-asian-f-1773591630259-1be66e9d.png",              imageAlt: "Sarah Johnson testimonial photo"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Finance Analyst",              company: "Trading Professional",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-a-european-male-1773591630782-a572ce73.png",              imageAlt: "Michael Chen testimonial photo"
            },
            {
              id: "3",              name: "Amara Okafor",              role: "Full-time Trader",              company: "Independent",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-portrait-of-an-african-male-1773591632668-59c45fc0.png",              imageAlt: "Amara Okafor testimonial photo"
            },
            {
              id: "4",              name: "Isabella Martinez",              role: "Emerging Trader",              company: "Trading Community",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-a-latina-female-1773591630956-be340e66.png",              imageAlt: "Isabella Martinez testimonial photo"
            },
            {
              id: "5",              name: "Ravi Patel",              role: "Part-time Trader",              company: "Professional Network",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-portrait-of-a-middle-easter-1773591630797-1763cea3.png",              imageAlt: "Ravi Patel testimonial photo"
            },
            {
              id: "6",              name: "Linh Nguyen",              role: "Trading Specialist",              company: "Independent",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/professional-headshot-of-a-southeast-asi-1773591631059-ceec1d38.png",              imageAlt: "Linh Nguyen testimonial photo"
            }
          ]}
          carouselMode="buttons"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="F.C Trading Academy By The Numbers"
          description="Proven results from our community of dedicated traders"
          tag="Impact & Growth"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Your Journey", href: "#pricing" }
          ]}
          buttonAnimation="blur-reveal"
          metrics={[
            {
              id: "students",              value: "100+",              description: "Successful traders trained"
            },
            {
              id: "markets",              value: "50+",              description: "Countries represented"
            },
            {
              id: "sessions",              value: "200+",              description: "Live trading sessions"
            },
            {
              id: "profit",              value: "85%",              description: "Traders achieving profitability"
            }
          ]}
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Trading Professionals Worldwide"
          description="Join successful traders who trust F.C Trading Academy for their education and continued growth"
          tag="Global Partners"
          tagIcon={Globe}
          tagAnimation="slide-up"
          buttons={[
            { text: "Join The Community", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" }
          ]}
          buttonAnimation="blur-reveal"
          names={[
            "TradingView",            "MetaTrader",            "Interactive Brokers",            "OANDA",            "Saxo Bank",            "TD Ameritrade",            "E-TRADE"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/logo-template-design_1222-77.jpg",            "http://img.b2bpic.net/free-psd/crypto-template-design_23-2151653253.jpg",            "http://img.b2bpic.net/free-vector/gradient-money-logo-template_23-2150907897.jpg",            "http://img.b2bpic.net/free-vector/pestel-infographic-design-template_23-2149528873.jpg",            "http://img.b2bpic.net/free-vector/gradient-accounting-logo-template_23-2148845126.jpg",            "http://img.b2bpic.net/free-vector/fintech-business-elements_24908-56733.jpg",            "http://img.b2bpic.net/free-vector/strategy-planning-elements_1084-25.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Your Free Trading Guide"
          description="Join thousands of traders who've started their journey with F.C Trading Academy. Fill out the form below and receive exclusive trading tips plus WhatsApp community access."
          inputs={[
            {
              name: "fullName",              type: "text",              placeholder: "Your full name",              required: true
            },
            {
              name: "email",              type: "email",              placeholder: "your@email.com",              required: true
            },
            {
              name: "phone",              type: "tel",              placeholder: "+234 901 704 9227",              required: true
            },
            {
              name: "experience",              type: "select",              placeholder: "Your trading experience",              required: true
            }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your trading goals...",            rows: 4,
            required: false
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AzNZNfYLOTAUE3v2Uk0ml3hSFX/modern-contact-form-interface-visualizat-1773591631866-d86f1d19.png"
          imageAlt="Contact us form with trading community"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Get Free Trading Guide"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="F.C Trading Academy"
          columns={[
            {
              title: "Academy",              items: [
                { label: "Trading Programs", href: "#pricing" },
                { label: "About Us", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              title: "Community",              items: [
                { label: "Join WhatsApp", href: "https://chat.whatsapp.com/DQmlXbD7MGq5ec49reGv15" },
                { label: "Trading Stories", href: "#testimonials" },
                { label: "Market Insights", href: "#features" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: 08112185706", href: "tel:08112185706" },
                { label: "WhatsApp: +2349017049227", href: "https://wa.me/2349017049227" },
                { label: "CEO: Oluwaseyi Oginni", href: "#about" },
                { label: "Email Support", href: "mailto:support@fctrading.com" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Disclaimer", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 F.C Trading Academy (F.C.T.A) | All rights reserved | CEO: Oluwaseyi Oginni"
        />
      </div>
    </ThemeProvider>
  );
}