import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  idLabel: string;
  idPlaceholder: string;
  idDefaultValue: string;
  idName: string;
  passwordName: string;
  rememberName: string;
}

const LoginForm = ({
  idLabel,
  idPlaceholder,
  idDefaultValue,
  idName,
  passwordName,
  rememberName
}: LoginFormProps) => {
  return (
    <form className="space-y-4" aria-label="Login Form">
      {/* ID Field */}
      <div className="space-y-2">
        <Label htmlFor={idName}>{idLabel}</Label>
        <Input
          id={idName}
          name={idName}
          placeholder={idPlaceholder}
          defaultValue={idDefaultValue}
          autoComplete="username"
          required
        />
      </div>
      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor={passwordName}>Password</Label>
        <Input
          id={passwordName}
          name={passwordName}
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />
      </div>
      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Use native label for checkbox */}
          <label htmlFor={rememberName} className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id={rememberName}
              name={rememberName}
              className="h-4 w-4 rounded border-gray-300 text-school-maroon focus:ring-school-maroon mr-2"
              title="Remember me"
            />
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-school-maroon hover:underline">
          Forgot password?
        </a>
      </div>
      {/* Submit Button */}
      <Button type="submit" className="w-full bg-school-maroon hover:bg-school-maroon/90">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

