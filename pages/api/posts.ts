import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  image: string;
  title: string;
  category: string;
  date: string;
  content: string;
  slug: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fakeData = [
    {
      image:
        "https://images.unsplash.com/photo-1622831478474-4b7b2b0b4b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZWdvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      category: "Category",
      date: "2021-06-06",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl nec. Nulla euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl nec.",
      slug: "lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit",
    },
  ];

  res.status(200).json(fakeData);
}
