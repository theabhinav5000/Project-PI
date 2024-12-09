interface VipBadgeProps {
  level: number;
}

const VipBadge = ({ level }: VipBadgeProps) => {
  return (
    <span className={`
      inline-flex items-center px-2 py-1 rounded text-xs font-medium
      ${level === 0 ? 'bg-gray-100 text-gray-600' : 
        level === 1 ? 'bg-blue-100 text-blue-600' :
        level === 2 ? 'bg-purple-100 text-purple-600' :
        'bg-gold-100 text-amber-600'}
    `}>
      VIP {level}
    </span>
  );
};

export default VipBadge;