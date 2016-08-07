import cheerio from 'cheerio';
import { Countries, People } from '/lib/collections';
import { HTTP } from 'meteor/http';
export default function () {
  People.update({},
    {
      $set: {
        gold: 0,
        silver: 0,
        bronze: 0
      }
    },
  {multi: true}
  );
  HTTP.get('https://www.rio2016.com/en/medal-count-country?rank=total', (error, result) => {
    if(error) {
      console.error(error);
    } else {
      let $ = cheerio.load(result.content);
      $('#ms-countries-medal-count').find('tr.table-medal-countries__link-table').each((i, country) => {
        const code = $(country).data('odfcode');
        const gold = parseInt($($(country).find('td')[3]).text(), 10);
        const silver = parseInt($($(country).find('td')[4]).text(), 10);
        const bronze = parseInt($($(country).find('td')[5]).text(), 10);

        Countries.update({code}, {
          $set: {
            gold,
            silver,
            bronze,
          }
        });
        People.update({countries: code}, {
          $inc: {
            gold,
            silver,
            bronze,
          }
        }
        );
      });
    }
  });
}
