import Router, { useRouter } from 'next/router';
import React from 'react';

const EditionIPFSUrl = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>editionIPFSUrl</div>;
};

export default EditionIPFSUrl;
