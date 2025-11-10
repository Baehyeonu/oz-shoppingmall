'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { authApi, User, UpdateUserRequest } from '../../lib/api';
import { tokenUtils, getErrorMessage, validation } from '../../lib/helpers';

// 마이페이지 클라이언트 컴포넌트
const MyPageClient = () => {
  // TODO: 필요한 상태들을 설정하세요
  // 힌트 1: user (User | null), loading, error, isEditing, updateLoading 상태가 필요합니다
  // 힌트 2: formData (UpdateUserRequest), formErrors (Partial<UpdateUserRequest>) 상태도 필요합니다
  // 힌트 3: useRouter를 사용하여 페이지 이동을 준비하세요

  // TODO: useEffect로 컴포넌트 마운트 시 사용자 정보를 로드하세요
  // 힌트 1: fetchUser 함수를 만들어 tokenUtils.exists()로 로그인 확인하세요
  // 힌트 2: 로그인되지 않았으면 error를 설정하고 return하세요
  // 힌트 3: authApi.getProfile()을 호출하여 사용자 정보를 가져오세요
  // 힌트 4: 받아온 데이터로 user와 formData를 설정하세요
  // 힌트 5: try-catch-finally로 에러와 로딩 상태를 관리하세요
  // 힌트 6: dependency array에 [router]를 넣으세요

  const validateForm = (): boolean => {
    // TODO: 폼 검증 로직을 구현하세요
    // 힌트 1: errors 객체를 만들어 검증 에러를 저장하세요
    // 힌트 2: validation.required()로 name을 검증하세요
    // 힌트 3: formData.email이 있으면 validation.email()로 검증하세요
    // 힌트 4: formData.phone이 있으면 validation.phone()으로 검증하세요
    // 힌트 5: setFormErrors(errors)로 에러를 설정하세요
    // 힌트 6: Object.keys(errors).length === 0 를 반환하세요
  };

  const handleInputChange = (field: keyof UpdateUserRequest, value: string) => {
    // TODO: 입력 필드 변경 핸들러를 구현하세요
    // 힌트 1: setFormData로 해당 field의 value를 업데이트하세요
    // 힌트 2: formErrors[field]가 있으면 제거하세요
  };

  const handleUpdateProfile = async () => {
    // TODO: 프로필 업데이트 로직을 구현하세요
    // 힌트 1: validateForm()으로 검증하고, 실패하면 return하세요
    // 힌트 2: authApi.updateProfile(formData)를 호출하세요
    // 힌트 3: 성공하면 user를 업데이트하고 isEditing을 false로 설정하세요
    // 힌트 4: alert으로 성공 메시지를 표시하세요
    // 힌트 5: try-catch-finally로 에러와 로딩 상태를 관리하세요
  };

  const handleCancelEdit = () => {
    // TODO: 편집 취소 로직을 구현하세요
    // 힌트 1: user 데이터로 formData를 복원하세요
    // 힌트 2: formErrors를 빈 객체로 초기화하세요
    // 힌트 3: isEditing을 false로 설정하세요
  };

  const handleLogout = () => {
    // TODO: 로그아웃 로직을 구현하세요
    // 힌트 1: tokenUtils.remove()로 토큰을 제거하세요
    // 힌트 2: router.push('/login')로 로그인 페이지로 이동하세요
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="mt-2">사용자 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center max-w-md">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <svg className="mx-auto h-12 w-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">오류가 발생했습니다</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.reload()} 
                variant="secondary"
              >
                새로고침
              </Button>
              <Button 
                onClick={() => router.push('/login')} 
                variant="primary"
              >
                로그인 페이지로 이동
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">마이페이지</h1>
            {!isEditing && (
              <Button 
                onClick={() => setIsEditing(true)}
                variant="primary"
              >
                정보 수정
              </Button>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* 기본 정보 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">기본 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm ${formErrors.name ? 'border-red-300' : ''}`}
                      placeholder="이름을 입력하세요"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{user.name}</p>
                  )}
                  {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm ${formErrors.email ? 'border-red-300' : ''}`}
                      placeholder="이메일을 입력하세요"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{user.email || '제공되지 않음'}</p>
                  )}
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm ${formErrors.phone ? 'border-red-300' : ''}`}
                      placeholder="010-1234-5678"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{user.phone || '등록되지 않음'}</p>
                  )}
                  {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">로그인 방식</label>
                  <p className="text-gray-900 py-2 capitalize">{user.provider}</p>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('address', e.target.value)}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm ${formErrors.address ? 'border-red-300' : ''}`}
                    placeholder="주소를 입력하세요"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{user.address || '등록되지 않음'}</p>
                )}
                {formErrors.address && <p className="mt-1 text-sm text-red-600">{formErrors.address}</p>}
              </div>
            </div>

            {/* 계정 정보 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">계정 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">가입일</label>
                  <p className="text-gray-900 py-2">
                    {user.created_at ? new Date(user.created_at).toLocaleDateString('ko-KR') : '정보 없음'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">마지막 수정일</label>
                  <p className="text-gray-900 py-2">
                    {user.updated_at ? new Date(user.updated_at).toLocaleDateString('ko-KR') : '정보 없음'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {isEditing ? (
              <>
                <Button 
                  onClick={handleUpdateProfile}
                  variant="primary"
                  className="flex-1"
                  disabled={updateLoading}
                >
                  {updateLoading ? '저장 중...' : '저장하기'}
                </Button>
                <Button 
                  onClick={handleCancelEdit}
                  variant="secondary"
                  className="flex-1"
                  disabled={updateLoading}
                >
                  취소
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => router.push('/products')}
                  variant="secondary"
                  className="flex-1"
                >
                  쇼핑 계속하기
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="danger"
                  className="flex-1"
                >
                  로그아웃
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageClient;
