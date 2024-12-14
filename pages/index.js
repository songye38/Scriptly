import { supabase } from '../src/utils/supabase'; // supabase 클라이언트 불러오기
import Header from '../src/Components/ComplexComponents/Header';
import MainTab from '../src/Components/BasicComponents/MainTab';
import { useState } from 'react';

const Home = ({ posts, projects }) => {
  return (
    <div>
      <Header />
      <MainTab posts={posts} projects={projects} />
    </div>
  );
};

export const getServerSideProps = async () => {
  // posts 테이블에서 데이터 가져오기
  const { data: posts, error: postsError } = await supabase
    .from('posts')  // 'posts' 테이블에서 데이터를 가져옵니다.
    .select('*');    // 모든 컬럼 가져오기

  // projects 테이블에서 데이터 가져오기
  const { data: projects, error: projectsError } = await supabase
    .from('projects')  // 'projects' 테이블에서 데이터를 가져옵니다.
    .select('*');      // 모든 컬럼 가져오기

  // 에러 처리
  if (postsError || projectsError) {
    console.error("Error fetching data:", postsError || projectsError);
    return { props: { posts: [], projects: [] } }; // 오류 발생 시 빈 배열 반환
  }

  console.log("Fetched posts:", posts);
  console.log("Fetched projects:", projects);

  return {
    props: {
      posts,
      projects,
    },
  };
};


export default Home;
