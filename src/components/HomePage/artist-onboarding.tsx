"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/data/artists";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Camera,
  DollarSign,
  FileText,
  Globe,
  MapPin,
  Tag,
  Upload,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must be less than 500 characters"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  profileImage: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Russian",
  "Hindi",
];

const feeRanges = [
  "$0 - $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export default function ArtistOnboardingForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories: string[];
    if (checked) {
      newCategories = [...selectedCategories, category];
    } else {
      newCategories = selectedCategories.filter((c) => c !== category);
    }
    setSelectedCategories(newCategories);
    setValue("categories", newCategories);
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    let newLanguages: string[];
    if (checked) {
      newLanguages = [...selectedLanguages, language];
    } else {
      newLanguages = selectedLanguages.filter((l) => l !== language);
    }
    setSelectedLanguages(newLanguages);
    setValue("languages", newLanguages);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
      setProfileImage(file);
      setValue("profileImage", file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
    setValue("profileImage", undefined);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Artist Onboarding Data:", {
      ...data,
      profileImage: profileImage
        ? {
            name: profileImage.name,
            size: profileImage.size,
            type: profileImage.type,
          }
        : null,
    });
    toast.success(
      "Your artist profile has been submitted successfully. You can check the data in the console."
    );

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Artist Profile Information
        </CardTitle>
        <CardDescription>
          Please fill out all sections to complete your artist onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-4 w-4 text-purple-600" />
              <h3 className="text-lg font-semibold">Basic Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="location"
                    {...register("location")}
                    placeholder="City, Country"
                    className={`pl-10 ${
                      errors.location ? "border-destructive" : ""
                    }`}
                  />
                </div>
                {errors.location && (
                  <p className="text-sm  text-destructive">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio *</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Textarea
                  id="bio"
                  {...register("bio")}
                  placeholder="Tell us about yourself, your artistic journey, and what inspires you..."
                  className={`pl-10 min-h-[100px] ${
                    errors.bio ? "border-destructive" : ""
                  }`}
                />
              </div>
              <div className="flex justify-between text-sm text-destructive">
                <span>{errors.bio?.message}</span>
                <span
                  className={`${
                    watch("bio")?.length === 500
                      ? "text-destructive"
                      : "text-gray-500"
                  }`}
                >
                  {watch("bio")?.length || 0}/500
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-purple-600" />
              <h3 className="text-lg font-semibold">Art Categories *</h3>
            </div>

            <div className="space-y-2">
              <Label>Select your artistic categories</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border rounded-lg">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(category, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
              {errors.categories && (
                <p className="text-sm text-destructive">
                  {errors.categories.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-4 w-4 text-purple-600" />
              <h3 className="text-lg font-semibold">Languages Spoken *</h3>
            </div>

            <div className="space-y-2">
              <Label>Select languages you speak</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border rounded-lg ">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) =>
                        handleLanguageChange(language, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`language-${language}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {language}
                    </Label>
                  </div>
                ))}
              </div>
              {selectedLanguages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedLanguages.map((language) => (
                    <Badge key={language} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              )}
              {errors.languages && (
                <p className="text-sm text-destructive">
                  {errors.languages.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-4 w-4 text-purple-600" />
              <h3 className="text-lg font-semibold">Fee Range *</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feeRange">
                Select your typical project fee range
              </Label>
              <Select onValueChange={(value) => setValue("feeRange", value)}>
                <SelectTrigger
                  className={errors.feeRange ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select fee range" />
                </SelectTrigger>
                <SelectContent>
                  {feeRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.feeRange && (
                <p className="text-sm text-destructive">
                  {errors.feeRange.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-4 w-4 text-purple-600" />
              <h3 className="text-lg font-semibold">Profile Image</h3>
              <span className="text-sm text-gray-500">(Optional)</span>
            </div>

            <div className="space-y-2">
              <Label>Upload a profile photo</Label>
              {!imagePreview ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <Label htmlFor="profileImage" className="cursor-pointer">
                      <span className="mt-1  mx-auto block text-sm text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </span>
                    </Label>
                    <Input
                      id="profileImage"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative inline-block">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Profile preview"
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                    onClick={removeImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="">
            <Button
              type="submit"
              className="w-full text-white bg-pink-500 cursor-pointer hover:bg-pink-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Complete Onboarding"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
