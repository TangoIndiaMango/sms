"use client"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RESET_PASSWORD } from "@/graphql/actions/reset-password.actions";
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type Props = {
    activationToken: string | string[];
};

const formSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
}).refine(
    (values) => {
        return values.password === values.confirmPassword;
    },
    {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

type ResetPasswordSchema = z.infer<typeof formSchema>;


const ResetPassword = ({ activationToken }: Props) => {
    const [resetPassword, { loading }] = useMutation(RESET_PASSWORD)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ResetPasswordSchema>({
        resolver: zodResolver(formSchema),
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmshowPassword, setConfirmShowPassword] = React.useState(false);


    const onSubmit = async (data: ResetPasswordSchema) => {
        try {
            const res = await resetPassword({
                variables: {
                    password: data.password,
                    activationToken: activationToken
                }
            })
            if (res.data.resetPassword.error) {
                toast.error(res.data.resetPassword.error)
            }
            toast.success("Your password has been updated successfully")
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        }
        reset();
        // router.push('/dashboard')
    };

    return (
        <Card className="w-[350px] md:w-[450px]">
            <CardHeader>
                <CardTitle className='text-center'>Reset your Password</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col space-y-1.5 relative">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                {...register("password")}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                autoComplete="off"
                            />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </div>
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5 relative">
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input
                                {...register("confirmPassword")}
                                type={confirmshowPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                autoComplete="off"
                            />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setConfirmShowPassword(!confirmshowPassword)}
                            >
                                {confirmshowPassword ? <EyeOff /> : <Eye />}
                            </div>
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="w-full flex flex-col">
                    <div className="w-full">
                        <Button className="w-full" type="submit" disabled={isSubmitting || loading}>
                            Submit
                        </Button>
                    </div>
                </CardFooter>
            </form>
        </Card>
    );
};

export default ResetPassword;