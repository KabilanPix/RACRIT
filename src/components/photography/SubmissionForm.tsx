"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon } from "lucide-react";

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    clubCollegeName: "",
    email: "",
    phone: "",
    story: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 15 * 1024 * 1024) {
        setError("File size exceeds 15 MB. Please choose a smaller photo.");
        return;
      }
      setFile(selectedFile);
      setError(null);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError("Please select a photograph to upload.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("clubCollegeName", formData.clubCollegeName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("story", formData.story);
      data.append("photo", file);

      const res = await fetch("/api/photo-submission", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while uploading. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#1a1a1a]/80 backdrop-blur-2xl border border-accent/30 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[0_0_50px_rgba(43,238,52,0.15)] animate-fadeIn">
        <div className="w-16 h-16 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Photograph Submitted!</h3>
        <p className="text-text-light text-base leading-relaxed mb-6">
          Thank you for participating, <span className="text-white font-medium">{formData.name}</span>. Your photograph and story have been successfully received and safely uploaded.
        </p>
        <p className="text-sm text-text-light/60 mb-8">
          A confirmation record has been logged for <span className="text-accent">{formData.email}</span>.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setFile(null);
            setPreview(null);
            setFormData({ name: "", clubCollegeName: "", email: "", phone: "", story: "" });
          }}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
        >
          Submit Another Entry
        </button>
      </div>
    );
  }

  return (
    <div id="submit-section" className="w-full max-w-3xl mx-auto">
      <div className="bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Participant Submission Form</h2>
          <p className="text-text-light text-sm sm:text-base">
            Please fill in your details and upload your photograph. Max file size: 15 MB.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name & College */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                Club / College Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="clubCollegeName"
                required
                value={formData.clubCollegeName}
                onChange={handleInputChange}
                placeholder="e.g. Rajalakshmi Institute of Tech"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-sm"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-sm"
              />
            </div>
          </div>

          {/* Theme Story */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-text-light">
                The Story Behind the Photo <span className="text-accent">*</span>
              </label>
              <span className={`text-xs font-mono ${
                (() => {
                  const words = formData.story.trim() === "" ? 0 : formData.story.trim().split(/\s+/).length;
                  if (words === 0) return "text-text-light/50";
                  if (words >= 100 && words <= 150) return "text-accent font-semibold";
                  return "text-amber-400";
                })()
              }`}>
                {formData.story.trim() === "" ? 0 : formData.story.trim().split(/\s+/).length} / 100–150 words
              </span>
            </div>
            <p className="text-xs text-text-light/60 mb-2">
              Explain the personal, cultural, or historical significance of the object in 100–150 words.
            </p>
            <textarea
              name="story"
              required
              rows={5}
              value={formData.story}
              onChange={handleInputChange}
              placeholder="Write your 100–150 word story explaining the object's personal, cultural or historical significance..."
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-sm resize-none"
            />
          </div>

          {/* Photo File Upload Box */}
          <div>
            <label className="block text-sm font-semibold text-text-light mb-2">
              Upload Photograph <span className="text-accent">*</span> (Max 15 MB)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 hover:border-accent/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-black/20 hover:bg-white/5 group"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              {preview ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-48 h-32 rounded-lg overflow-hidden border border-white/20">
                    <img src={preview} alt="Selected preview" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-accent" /> {file?.name}
                  </span>
                  <span className="text-xs text-accent hover:underline">Click to change file</span>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Click or drag & drop to upload your photo</p>
                    <p className="text-xs text-text-light/60 mt-1">Accepts any image format (JPG, PNG, HEIC, etc.) up to 15 MB</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accent to-emerald-400 text-black font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(43,238,52,0.3)] mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Uploading to Google Drive...
              </>
            ) : (
              "Submit Photograph"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
