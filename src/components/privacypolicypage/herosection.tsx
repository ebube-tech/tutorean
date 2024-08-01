// components/privacypolicypage/HeroSection.tsx
import React from "react";

const PolicyContents = [
  {
    title: "Introduction",
    content:
      " Welcome to Tutlee, a product of Dahoma Consulting Limited. This Privacy Policy explains how we collect, use, disclose,and safeguard your information when you visit our website [www.tutlee.com] and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,please do not access the site.",
  },
  {
    title: " 1. Information We Collect We may",
    content:
      "collect information about you in a variety of ways. The information we may collect on the Site includes: Personal Data Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards. Derivative Data Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times,and the pages you have viewed directly before and after accessing the Site. Financial Data Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, Paystack, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.",
  },
  {
    title: "2. Use of Your Information Having accurate information about you",
    content:
      " permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: Create and manage your account. Process your transactions and send you related information, including purchase confirmations and invoices. Administer contests, promotions, and rewards programs. Email you regarding your account or order. Fulfill and manage purchases, orders, payments, and other transactions related to the Site. Improve the Site to better serve you. Compile anonymous statistical data and analysis for use internally or with third parties. Request feedback and contact you about your use of the Site. Resolve disputes and troubleshoot problems. Respond to product and customer service requests. Send you a newsletter. ",
  },
  {
    title:
      "  3. Disclosure of Your Information We may share information we have",
    content:
      " collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. Third-Party Service Providers We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. Marketing Communications With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law. Business Transfers We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. ",
  },
  {
    title: "4. Security of Your Information",
    content:
      "While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. ",
  },
  {
    title: "5. Policy for Children We do not knowingly",
    content:
      " solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us at: legal@tutlee.com",
  },
  {
    title: "6. Changes to This Privacy Policy",
    content:
      " update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.",
  },
  {
    title: " 7. Contact Us If you have questions or comments",
    content:
      "If you have questions or comments about this Privacy Policy, please contact us at:",
  },
];

const HeroSection = () => {
  return (
    <div className="bg-[#FFF3E5] p-8 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl border-4 border-orange-500 bg-white p-8 rounded-3xl shadow-lg min-h-[120vh] flex flex-col">
        {/* Header Section */}
        <div className="bg-orange-500 text-white py-4 px-6 rounded-3xl mb-8 flex items-center justify-center">
          <h1 className="text-xl lg:text-3xl font-bold text-center">
            Privacy Policy
          </h1>
        </div>

        {/* Main Content */}
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          {PolicyContents.map((policy, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-4">{policy.title}</h2>
              <p>{policy.content}</p>
              {index < PolicyContents.length - 1 && <hr className="my-4" />}
            </div>
          ))}
          <p>
            Dahoma Consulting Limited 279 Herbert Macaualay Way, Yaba Lagos,
            Nigeria.
          </p>
          <p>contact@tutlee.com</p>
          {/* Add more paragraphs as needed */}
        </div>

        {/* Footer Section */}
        <div className="bg-orange-500 text-white py-4 px-6 rounded-b-3xl rounded-t-3xl flex items-center justify-center">
          <h1 className="text-sm lg:text-base text-center">
            @2024 Tutlee.com - Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
