// 회원가입 폼 컴포넌트

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { authApi } from '../../lib/api';
import { validation, getErrorMessage } from '../../lib/helpers';

interface SignupFormProps {
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  // TODO: 상태 관리를 위한 useState를 설정하세요
  // 힌트 1: name, email, password, confirmPassword, error, loading 상태가 필요합니다
  // 힌트 2: useRouter를 사용하여 페이지 이동을 준비하세요

  const handleSignup = async (e: React.FormEvent) => {
    // TODO: 회원가입 핸들러를 구현하세요
    // 힌트 1: e.preventDefault()로 폼 기본 동작을 막으세요
    // 힌트 2: validation.required()로 이름을 검증하세요
    // 힌트 3: validation.email()로 이메일을 검증하세요
    // 힌트 4: validation.password()로 비밀번호를 검증하세요 (최소 6자)
    // 힌트 5: password와 confirmPassword가 일치하는지 확인하세요
    // 힌트 6: authApi.signup()을 호출하여 회원가입을 처리하세요
    // 힌트 7: onSuccess가 있으면 실행하고, 없으면 router.push('/login')로 이동하세요
    // 힌트 8: try-catch-finally로 에러 처리와 로딩 상태를 관리하세요
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSignup} className="space-y-6">
        {error && (
          <div className="p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            이름
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
            placeholder="이름을 입력해주세요"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
            placeholder="비밀번호를 입력해주세요 (최소 6자)"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            비밀번호 확인
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </div>
        
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          className="py-3"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              가입 중...
            </div>
          ) : (
            '가입하기'
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
