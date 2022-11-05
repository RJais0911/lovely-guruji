import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
function termsandcondition() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto my-10 p-10 h-screen">
        <h1 className="dark:text-white font-ubuntu text-black text-3xl my-10">Terms and condtions</h1>
        <p className="dark:text-white font-ubuntu text-black">
          By agreeing to this you allow us to share your data with us. Your data
          is kept safe with us only and not shared with any third-parties.
        </p>
        <span className="dark:text-gray-400 font-ubuntu text-gray-600 hover:underline">
            <Link href="/#Contact">
                Back to Contact
            </Link>
        </span>
      </div>
    </Layout>
  );
}

export default termsandcondition;
