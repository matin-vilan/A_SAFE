// import NextAuth from "next-auth";
// import { options } from "./options";

// const handler = NextAuth(options);

// export { handler as Get, handler as Post };
// -------
// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   return await NextAuth(req, res, options);
// };

// export { handler as GET, handler as POST };
// ---------

import { options } from "./options";
import NextAuth from "next-auth/next";

const handler = NextAuth(options);
export { handler as GET, handler as POST };
