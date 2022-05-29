import { Layout } from '~/components/layouts';
import { PageSeo } from '~/components/Seo';
import { Introduction } from '~/components/sections/Introduction';

export default function Index() {
  return (
    <>
      <PageSeo title="Opa Kholis Majid" titleTemplate="%s" />
      <Layout>
        <Introduction />
      </Layout>
    </>
  );
}
