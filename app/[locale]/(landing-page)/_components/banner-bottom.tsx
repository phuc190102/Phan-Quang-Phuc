import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerBottom = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-16 bg-green-100', theme === 'dark' && 'bg-slate-500')}>
      <div className='px-32 flex justify-center py-16'>
        <div>
          <Image height={350} width={450} alt='banner' src='/banner-bottom.webp' />
        </div>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='font-bold text-4xl' style={{ color: 'black' }}>Trở thành cộng tác viên giảng dạy</h1>

          <p style={{ color: 'black' }}>Các giảng viên từ khắp nơi trên thế giới dạy hàng triệu người. Chúng tôi cung cấp các công cụ và kỹ năng để dạy những gì bạn yêu thích.</p>
          <div className='flex items-center gap-2'>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Bắt đầu công việc giảng dạy ngay</Button>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Đăng nhập để trở thành cộng tác viên</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerBottom
