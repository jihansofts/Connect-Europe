import HeroBanner from '@/common/HeroBanner';
import Layout from '@/components/Layout'
import RecruitingPages from '@/components/RecruitingPages/RecruitingPages';
import React from 'react'

export default function recruiting() {
  return (
    <Layout>
      <HeroBanner title="Recruiting" desc="we will find the best for you" />
      <RecruitingPages />
    </Layout>
  );
}
