import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const SubCategory = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  // console.log("data", storeCustomizationSetting);

  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      <PageHeader
        headerBg={storeCustomizationSetting?.privacy_policy?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.privacy_policy?.title
        )}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <CMSkeleton
            html
            count={15}
            height={15}
            error={error}
            loading={loading}
            data={storeCustomizationSetting?.privacy_policy?.description}
          />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          
        </div>
      </div>
    </Layout>
  );
};

export default SubCategory;
