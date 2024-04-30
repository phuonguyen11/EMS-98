import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from 'react';
import { getCourse } from 'hooks/getCourse';
import { ECourseDocumentType, removeCourseDocument, updateDocument } from '../../hooks/updateCourse';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import getClassFromUser from 'hooks/getClassFromUser';
const CourseDetail = () => {
  const role = localStorage.getItem('role');
  const isTeacher = role === 'teacher';

  // Lấy course code từ URL parameters
  const params = useParams();
  const courseCode = params?.courseCode;

  // State variables để quản lý course data và document upload
  const [course, setCourse] = useState([]);
  const [documentSelected, setDocumentSelected] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [studentClass, setStudentClass] = useState(null);

  // Tham chiếu đến input file cho document upload
  const inputFileRef = useRef(null);
  // const userID localStorage.getItem('userId'));

  useEffect(() => {
    handleGetCourse();
    getClass();
  }, [courseCode]);
  // console.log(courseCode);
  const handleGetCourse = async () => {
    if (!courseCode) return;

    const course = await getCourse(courseCode);
    course && setCourse(course);
    console.log(course);
  };
  const getClass = async () => {
    if (!courseCode) return;
    const myClass = await getClassFromUser(courseCode);
    console.log('myClass', myClass);
    setStudentClass(myClass);
  };
  // Hàm mở course document trong trang mới
  const onOpenCourseDoc = (url) => {
    window.open(url, '_blank');
  };

  // Hàm xóa course document
  const onRemoveCourseDocument = async (documentId) => {
    const isConfirm = confirm('Are you sure you want to remove this document?');

    if (!courseCode || !isConfirm) return;
    await removeCourseDocument(courseCode, documentId);
    handleGetCourse();
  };

  // Xử lí button click cho updating course document
  const onBtnUpdateClick = async (document) => {
    setDocumentSelected(document);
    if (!courseCode) return;

    // Nếu document là 1 notification, prompt nội dung mới
    if (document.type === ECourseDocumentType.NOTIFICATION) {
      const newNotification = prompt('Enter new notification content:', document.content);
      if (!newNotification) return;

      // Cập nhật notification content
      await updateDocument(courseCode, {
        ...document,
        content: newNotification
      });
      handleGetCourse();
    } else {
      // Nếu document là 1 file, kích hoạt thao tác nhập file để cập nhật
      if (isUploading || !inputFileRef.current) return;
      inputFileRef.current.accept = document.type === ECourseDocumentType.FILE ? '.pdf' : '.mp4';
      inputFileRef.current.click();
    }
  };
  const onUploadFile = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setIsUploading(true);
      const splitFileName = file.name.split('.');

      const fileName = splitFileName[0] + '_' + uuidv4() + '.' + splitFileName[1];
      const storage = getStorage();
      const storageRef = ref(storage, fileName);
      const res = await uploadBytes(storageRef, file);

      // Lấy Url của tệp sau khi tải lên thành công
      const url = await getDownloadURL(res.ref);

      // Cập nhật document data với file URL mới
      const documentData = {
        ...documentSelected,
        name: file.name,
        content: url
      };

      // Cập nhật document trong database
      await updateDocument(course.courseCode, documentData);
      alert('Update document successfully');
      handleGetCourse();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
      inputFileRef.current && (inputFileRef.current.value = '');
    }
  };
  return (
    <MainCard title={courseCode}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <div>
          <div>
            <strong>Course Name:</strong>
            <span>{course?.courseName}</span>
          </div>

          <div>
            <strong>Credit:</strong>
            <span>{course?.credit}</span>
          </div>

          {studentClass && (
            <>
              <div>
                <strong>Schedule:</strong>
                <span>
                  {' '}
                  Thứ {studentClass.date}, Tiết {studentClass.startTime} - {studentClass.endTime}
                </span>
              </div>
              <div>
                <strong>Teacher: </strong>
                <span>{studentClass.teacherName}</span>
              </div>
              <div>
                <strong>Registered Students:</strong>
                {studentClass.student.map((person) => (
                  <div key={`student-item-${person.name}`}>
                    <img src={person.image} alt="" style={{ width: 200 }} />

                    <div>
                      <p style={{ margin: 0 }}>{person.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Display registered students */}
          <div>
            <strong>Registered Students:</strong>

            {course?.studentRegister?.map((it) => (
              <div key={`student-item-${it.uid}`}>
                <img src={it.image} alt="" style={{ width: 200 }} />

                <div>
                  <p style={{ margin: 0 }}>{it?.name}</p>
                  <p style={{ margin: 0 }}>{it?.email}</p>

                  {/* Display GPA and major if teacher role */}
                  {isTeacher && (
                    <>
                      <p style={{ margin: 0 }}>GPA: {it?.GPA?.toFixed(2)}</p>
                      <p style={{ margin: 0 }}>Major: {it?.major}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Display course documents */}
          {course?.courseDocuments && (
            <div>
              <strong>Course Documents:</strong>

              {course.courseDocuments.map((it) =>
                it.type === ECourseDocumentType.NOTIFICATION ? (
                  <div key={`course-document-item-${it.id}`}>
                    <strong>{it.content}</strong>

                    {/* Display remove and update buttons for teacher */}
                    {isTeacher && (
                      <>
                        <button onClick={() => onRemoveCourseDocument(it.id)}>Remove</button>
                        <button onClick={() => onBtnUpdateClick(it)}>Update</button>
                      </>
                    )}
                  </div>
                ) : (
                  <div key={`course-document-item-${it.id}`}>
                    <strong>{it.name}</strong>

                    <button onClick={() => onOpenCourseDoc(it.content)}>Download</button>

                    {/* Display remove and edit buttons for teacher */}
                    {isTeacher && (
                      <>
                        <button onClick={() => onRemoveCourseDocument(it.id)}>Remove</button>
                        <button onClick={() => onBtnUpdateClick(it)}>
                          {isUploading && documentSelected?.id === it.id ? 'Updating...' : 'Edit'}
                        </button>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        {/* <input type="file" name="" id="" hidden ref={inputFileRef} onChange={onUploadFile} /> */}
      </Box>
    </MainCard>
  );
};
export default CourseDetail;
