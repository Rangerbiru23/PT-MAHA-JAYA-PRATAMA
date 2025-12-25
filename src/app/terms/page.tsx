'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, Gavel, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Gavel className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms and conditions govern your use of PT MAHA JAYA PRATAMA's video production and television program services.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-purple-400 mr-3" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using PT MAHA JAYA PRATAMA's website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-pink-400 mr-3" />
                  Services Description
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>PT MAHA JAYA PRATAMA provides the following services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Film production services from concept to completion</li>
                    <li>Television program development and production</li>
                    <li>Video content creation for various platforms</li>
                    <li>Post-production services including editing and effects</li>
                    <li>Creative concept development and storyboard creation</li>
                    <li>Equipment rental and technical support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
                <div className="space-y-4 text-gray-300">
                  <p>As a client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information for your project</li>
                    <li>Supply necessary materials and assets in a timely manner</li>
                    <li>Provide feedback and approvals within agreed timeframes</li>
                    <li>Ensure all content provided is legal and does not infringe on third-party rights</li>
                    <li>Make timely payments as per the agreed schedule</li>
                    <li>Obtain any necessary permits or licenses for filming locations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Deposit:</strong> A 50% deposit is required to commence work on any project</li>
                    <li><strong>Progress Payments:</strong> Additional payments may be required at project milestones</li>
                    <li><strong>Final Payment:</strong> Full payment must be received before delivery of final materials</li>
                    <li><strong>Late Payments:</strong> Late payments may incur interest charges of 2% per month</li>
                    <li><strong>Payment Methods:</strong> We accept bank transfers and other agreed payment methods</li>
                    <li><strong>Price Changes:</strong> Prices are fixed unless project scope changes significantly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Project Timeline */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Project timelines are estimates based on current workload and project complexity</li>
                    <li>Delays caused by client feedback or material supply may extend timelines</li>
                    <li>We will communicate any significant timeline changes promptly</li>
                    <li>Rush services may be available at additional cost</li>
                    <li>Force majeure events may excuse delays beyond our control</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Client Materials:</strong> You retain all rights to materials you provide to us.</p>
                  <p><strong>Our Work:</strong> Upon full payment, rights to the final deliverables transfer to you as specified in your contract.</p>
                  <p><strong>Portfolio Use:</strong> We reserve the right to showcase completed work in our portfolio and marketing materials.</p>
                  <p><strong>Third-Party Content:</strong> You are responsible for obtaining licenses for any third-party content used in your project.</p>
                  <p><strong>Attribution:</strong> Credit to PT MAHA JAYA PRATAMA is appreciated but not required unless specified in the contract.</p>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Both parties agree to maintain confidentiality of:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Project details and concepts</li>
                    <li>Business information and strategies</li>
                    <li>Technical processes and methods</li>
                    <li>Financial information and pricing</li>
                    <li>Any information marked as confidential</li>
                  </ul>
                  <p className="mt-4">This confidentiality obligation survives the termination of our business relationship.</p>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation and Refunds */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Client Cancellation:</strong> Clients may cancel projects, but deposits are non-refundable</li>
                    <li><strong>Work Completed:</strong> Payment is required for all work completed up to cancellation date</li>
                    <li><strong>Our Cancellation:</strong> We reserve the right to cancel projects with full refund if unable to complete</li>
                    <li><strong>Refund Process:</strong> Refunds, if applicable, will be processed within 30 days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Our liability is limited to the total project value</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>We are not responsible for third-party services or content</li>
                    <li>Our services are provided "as is" without warranties beyond those explicitly stated</li>
                    <li>We are not liable for business losses or opportunity costs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-300">
                  <p>In case of disputes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We will first attempt to resolve disputes through good faith negotiations</li>
                    <li>If unresolved, disputes will be mediated by a neutral third party</li>
                    <li>As a last resort, disputes will be resolved through arbitration in Bandung, Indonesia</li>
                    <li>Indonesian law will govern these terms and conditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Important Notices */}
            <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 text-red-400 mr-3" />
                  Important Notices
                </h2>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We are not responsible for unauthorized use of your account</li>
                    <li>We may update these terms periodically with notice</li>
                    <li>Your continued use of services constitutes acceptance of updated terms</li>
                    <li>These terms represent the entire agreement between parties</li>
                    <li>Failure to enforce any term does not waive our right to enforce it later</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border-purple-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-300">
                  <p>For questions about these Terms and Conditions, please contact us:</p>
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