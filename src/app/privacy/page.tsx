'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              MAHA JAYA PRATAMA
            </Link>
            <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how PT MAHA JAYA PRATAMA collects, uses, and protects your information.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-purple-400 mr-3" />
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  PT MAHA JAYA PRATAMA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our video production and television program services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-pink-400 mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name and contact details (email, phone number)</li>
                      <li>Company information and job title</li>
                      <li>Project requirements and preferences</li>
                      <li>Communication records and correspondence</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 text-red-400 mr-3" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our video production and television program services</li>
                    <li>Communicate with you about projects, proposals, and updates</li>
                    <li>Process payments and manage billing information</li>
                    <li>Send you marketing materials (with your consent)</li>
                    <li>Analyze website usage to enhance user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                    <li><strong>Business Partners:</strong> Collaborative partners for joint projects</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    <li><strong>Successors:</strong> In case of business transfer or acquisition</li>
                  </ul>
                  <p className="mt-4">We never sell your personal information to third parties for marketing purposes.</p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and obtain a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at: <strong>pt.mahajayapratama@outlook.co.id</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.
                </p>
              </CardContent>
            </Card>

            {/* International Data Transfers */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than Indonesia. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take immediate steps to delete the information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to This Policy */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated "Effective Date." We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-300">
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p><strong>PT MAHA JAYA PRATAMA</strong></p>
                    <p>Jalan Taurus Nomor 37 A, Kota Bandung, Jawa Barat</p>
                    <p>Desa/Kelurahan Gumuruh, Kec. Batununggal</p>
                    <p>Email: pt.mahajayapratama@outlook.co.id</p>
                    <p>Phone: 085285703497</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-400">
            <p>&copy; 2024 PT MAHA JAYA PRATAMA. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}