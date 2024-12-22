import { supabase } from '../../src/utils/supabase'; // Supabase 클라이언트 불러오기
import { useRouter } from 'next/router';  // Next.js의 useRouter 훅을 사용하여 동적 라우팅 처리
import ProjectName from '../../src/Components/BasicComponents/ProjectName';
import { useState } from 'react';
import ProjectHeader from '../../src/Components/ComplexComponents/ProjectHeader';
import ChatComponent from '../../src/Components/ComplexComponents/ChatComponent';
import PromptOption from '../../src/Components/BasicComponents/\bPromptOption';

const ProjectDetail = ({ project, studyQuestions }) => {
    const [text, setText] = useState('');
    const router = useRouter();
    const { project_id } = router.query; // URL에서 project_id를 가져옴

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
            <div style={{ 
              padding : '10px',
              display: 'flex', 
              flexDirection: 'row', 
              width: '100%', 
              height: '100vh', 
              alignItems: 'flex-start', 
              gap: '20px', 
              scroll:'hidden',
            }}>
              
              {/* [왼쪽 사이드] 프로젝트 제목과 노트 섹션 */}
              <div style={{
                width: '20%', 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'row', 
                borderRight: '1px solid #ccc',
                boxSizing: 'border-box'  // 왼쪽 영역에도 box-sizing 적용
              }}>
                <ProjectName title={project.name} />
              </div>
                      
              {/* [오른쪽 사이드] 오른쪽의 대화 섹션 */}
              <div style={{
                width: "78%",
                display: 'flex', 
                flexDirection: 'column', 
                overflow:'hidden',
                height: '100vh', 
                boxSizing: 'border-box',  // 오른쪽 영역에도 box-sizing 적용
              }}>
                <div
                style={{
                  textAlign: "right", // 내부 콘텐츠를 오른쪽 정렬
                  width: "78%", // 너비를 80%로 설정
                  position: "fixed", // 화면에 고정
                  top: 0, // 화면 상단
                  right: 0, // 화면 오른쪽
                  zIndex: 1000, // 다른 요소보다 위에 표시
                  backgroundColor: "white", // 배경 색
                  padding: "8px", // 패딩 설정
                }}
                >
                  <ProjectHeader />
                </div>
                {/* (섹션2) 대화 섹션 */}
                <div style={{width : '100%',display:'flex',flexDirection:'row',gap:'20px',height:'100vh',top:'80px',position:'relative'}}>
                  <div style={{
                      width: '100%',
                  }}>
                    <ChatComponent projectID={project.id} studyQuestions={studyQuestions} />
                  </div>
                </div>
              </div>
          </div>
    );
};

// getServerSideProps를 이용하여 서버 사이드에서 데이터를 가져옵니다.
export const getServerSideProps = async ({ params }) => {
    const { project_id } = params;
  
    // Supabase에서 project_id에 해당하는 프로젝트 정보와 관련된 study_questions을 전체 가져옵니다.
    const { data: projectWithQuestions, error: projectError } = await supabase
      .from('projects')
      .select(`
        *,
        study_questions (
          question,
          answer_title,
          answer_content,
          created_at
        )
      `)  // 프로젝트와 관련된 모든 study_questions 테이블의 데이터를 포함
      .eq('id', project_id);
  
    if (projectError) {
      console.error('프로젝트를 가져오는 데 실패했습니다:', projectError);
      return { notFound: true };  // 프로젝트가 없으면 404 페이지 표시
    }

    // 데이터 반환
    return {
      props: {
        project: projectWithQuestions[0] || null,  // 첫 번째 프로젝트 데이터를 반환 (배열이므로 첫 번째 항목만)
        studyQuestions: projectWithQuestions[0]?.study_questions || [],  // 해당 프로젝트의 study_questions 배열을 반환
      },
    };
};
  
export default ProjectDetail;
