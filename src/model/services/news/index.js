
export async function getNews(graphqlRequest){
  const resp = await graphqlRequest(
  	`{
      news{
        data{
              headline,
              text,
              date,
              picture
            }
        }
     }`);
  const news = await resp.data;
  return news;
};
