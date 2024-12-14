import { supabase } from '../../src/utils/supabase'; // Supabase 클라이언트 불러오기
import { useRouter } from 'next/router';  // Next.js의 useRouter 훅을 사용하여 동적 라우팅 처리

const ProjectDetail = ({ project, posts }) => {
  const router = useRouter();
  const { project_id } = router.query; // URL에서 project_id를 가져옴

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>프로젝트: {project.title}</h1>
      <p>{project.description}</p>
      <h2>관련 블로그 글</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// getServerSideProps를 이용하여 서버 사이드에서 데이터를 가져옵니다.
export const getServerSideProps = async ({ params }) => {
  const { project_id } = params;

  // Supabase에서 project_id에 해당하는 프로젝트 정보를 가져옵니다.
  const { data: project, error: projectError } = await supabase
    .from('projects')
    .select('*')
    .eq('id', project_id)
    .single();  // 하나의 결과만 반환

  if (projectError) {
    console.error('프로젝트를 가져오는 데 실패했습니다:', projectError);
    return { notFound: true };  // 프로젝트가 없으면 404 페이지 표시
  }

  // 해당 프로젝트에 관련된 블로그 글 가져오기
  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('*')
    .eq('project_id', project_id);

  if (postsError) {
    console.error('블로그 글을 가져오는 데 실패했습니다:', postsError);
  }

  return {
    props: {
      project,
      posts: posts || [],  // 블로그 글이 없다면 빈 배열을 반환
    },
  };
};

export default ProjectDetail;
