import moment from "moment";
import Link from "next/link";

const RecentNews = ({ data }) => {
  return (
    <div className="rounded bg-indigo-950 p-4 h-full relative scroll-container">
      <div className="h-full absolute">
        <div className="bg-indigo-950">
          <span className="font-semibold">Recent News</span>
          <div className="border-b border-indigo-500/40 my-2"></div>
        </div>
        <div>
          {data?.Data?.slice(0, 10).map((news) => {
            return (
              <Link
                className="flex gap-5 items-center mt-2 p-1"
                key={news.id}
                href={news.url}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={news.imageurl}
                    alt={news.imageurl}
                    width={20}
                    height={20}
                  />
                  <p>
                    {news.title}
                    <span className="text-gray-500 text-xs whitespace-nowrap ml-2">
                      {moment.unix(news.published_on).fromNow()}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
