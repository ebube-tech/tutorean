import Link from "next/link";

const TermsContent = [
  {
    title: " Introduction",
    content:
      " Welcome to Tutlee! These terms and conditions outline the rules and regulations for the use of Tutlee's website, located at [www.tutlee.com]. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tutlee if you do not agree to all of the terms and conditions stated on this page. ",
  },
  {
    title:
      " 1. Definitions 'Website' refers to Tutlee's website, accessible from [www.tutlee.com].",
    content:
      " 'User' refers to any individual or entity who accesses or uses the Website. 'Content' refers to any text, images, video, audio, or other multimedia content, software, or other information or material submitted to or on the Website.",
  },
  {
    title:
      " 2. Intellectual Property Rights Unless otherwise stated, Tutlee and/or its licensors own the intellectual property rights for all material on Tutlee.",
    content:
      " All intellectual property rights are reserved. You may access this from Tutlee for your own personal use subjected to restrictions set in these terms and conditions.",
  },
  {
    title: " 3. User Responsibilities By using the Website, you agree to:",
    content:
      " Use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Not engage in any conduct that is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity. Not use the Website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software. ",
  },
  {
    title:
      " 4. User-Generated Content You retain ownership of any intellectual property rights that you hold in the content you submit to Tutlee.",
    content:
      " By submitting, posting, or displaying content on or through Tutlee, you grant Tutlee a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods. You represent and warrant that you have (and will have) all rights necessary to grant us the license rights in your content under these terms and that none of your content will infringe or violate the rights of any third party. ",
  },
  {
    title: " 5. Limitation of Liability In no event",
    content:
      "shall Tutlee, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort, or otherwise, and Tutlee, including its officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability In no event shall Tutlee, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort, or otherwise, and Tutlee, including its officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.",
  },
  {
    title: " 6. Indemnification You hereby",
    content:
      " indemnify to the fullest extent Tutlee from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorneys' fees) arising out of or in any way related to your breach of any of the provisions of these terms.",
  },
  {
    title: "7. Termination",
    content:
      " Termination We may terminate or suspend access to our Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms",
  },
  {
    title: "8. Governing Law",
    content:
      " These terms will be governed by and interpreted in accordance with the laws of The Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Lagos State for the resolution of any disputes.",
  },
  {
    title: "9. Changes to These Terms",
    content:
      "Tutlee reserves the right to revise these terms at any time as it sees fit, and by using this Website, you are expected to review these terms on a regular basis to ensure you understand all terms and conditions governing the use of this Website.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions about these Terms, please contact us at:",
  },
];

export default function Terms_and_conditions() {
  return (
    <div className="bg-[#FFF3E5] p-8 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl border-4 border-orange-500 bg-white p-8 rounded-3xl shadow-lg min-h-[120vh] flex flex-col">
        <h1 className="font-bold text-[#F77F00] text-2xl">
          Terms & Conditions
        </h1>
        <div className="my-2 text-md ">
          {TermsContent.map((term, i) => (
            <div key={i} className="text-gray-700">
              <h3 className="font-bold text-lg">{term.title}</h3>
              <p>{term.content}</p>
              {i < TermsContent.length - 1 && <hr className="my-4" />}
            </div>
          ))}
          <p>
            Dahoma Consulting Limited 279 Herbert Macaualay Way, Yaba Lagos,
            Nigeria.
          </p>
          <p>contact@tutlee.com</p>
        </div>
        <div className="flex items-center justify-end me-10 gap-4 font-bold py-4">
          <Link href="/" className="text-[#F77F00] px-[10px] py-[2px] rounded">
            Cancel
          </Link>
          <Link
            href="#"
            className="bg-[#F77F00] text-white px-[30px] py-[10px] rounded-[6px]"
          >
            Agree
          </Link>
        </div>
      </div>
    </div>
  );
}
