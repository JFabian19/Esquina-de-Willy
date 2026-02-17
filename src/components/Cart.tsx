import { useCart } from '../context/CartContext';

// Simple SVG Icons
const ShoppingBagIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

const XIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const TrashIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);

const PlusIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const MinusIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export default function Cart() {
    const {
        items,
        isCartOpen,
        toggleCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total
    } = useCart();

    // If cart is empty and closed, don't show anything (except maybe always show if user wants, but request implies "When freshly added an order")
    // "cuando recien se anada un pedido" -> when an order is first added.
    if (items.length === 0 && !isCartOpen) return null;

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "51900643526"; // Consistent with App.tsx
        const message = `Hola, quiero realizar el siguiente pedido:%0A%0A${items
            .map(
                (item) =>
                    `- ${item.quantity}x ${item.name} ${item.variant ? `(${item.variant})` : ''} - S/ ${(
                        item.price * item.quantity
                    ).toFixed(2)}`
            )
            .join('%0A')}%0A%0ATotal: S/ ${total.toFixed(2)}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        clearCart();
        toggleCart();
    };

    return (
        <>
            {/* Floating "Ver Pedido" Button/Bar */}
            {!isCartOpen && items.length > 0 && (
                <div className="fixed bottom-4 left-0 right-0 px-4 z-50 flex justify-center animate-slide-up">
                    <button
                        onClick={toggleCart}
                        className="bg-brand-orange text-white px-6 py-3 rounded-full shadow-lg shadow-orange-500/40 flex items-center gap-3 font-bold text-base md:text-lg hover:scale-105 transition-transform w-full md:w-auto justify-center"
                    >
                        <div className="relative">
                            <ShoppingBagIcon size={24} />
                            <span className="absolute -top-2 -right-2 bg-white text-brand-orange text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-orange">
                                {items.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        </div>
                        <span>Ver Pedido</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm">
                            S/ {total.toFixed(2)}
                        </span>
                    </button>
                </div>
            )}

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={toggleCart}
                    />

                    <div className="relative bg-brand-dark w-full md:w-[500px] md:rounded-2xl h-[85vh] md:h-auto max-h-[90vh] flex flex-col shadow-2xl border-t md:border border-white/10 animate-slide-up">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <ShoppingBagIcon className="text-brand-orange" />
                                Tu Pedido
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                                aria-label="Cerrar carrito"
                            >
                                <XIcon size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {items.length === 0 ? (
                                <div className="text-center text-gray-400 py-12">
                                    <ShoppingBagIcon size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>Tu carrito está vacío</p>
                                    <button
                                        onClick={toggleCart}
                                        className="mt-4 text-brand-orange font-bold hover:underline"
                                    >
                                        Ver Menú
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-white truncate">{item.name}</h3>
                                            {item.variant && (
                                                <p className="text-sm text-gray-400">{item.variant}</p>
                                            )}
                                            <p className="text-brand-yellow font-bold mt-1">
                                                S/ {item.price.toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end justify-between gap-2">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                aria-label="Eliminar item"
                                            >
                                                <TrashIcon size={18} />
                                            </button>
                                            <div className="flex items-center gap-2 bg-brand-dark rounded-lg p-1 border border-white/10">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                                                    aria-label="Disminuir cantidad"
                                                >
                                                    <MinusIcon size={14} />
                                                </button>
                                                <span className="w-6 text-center text-white font-bold text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded bg-brand-orange hover:bg-orange-600 text-white transition-colors"
                                                    aria-label="Aumentar cantidad"
                                                >
                                                    <PlusIcon size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-4 border-t border-white/10 bg-brand-dark/95 backdrop-blur-sm pb-8 md:pb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-400">Total</span>
                                    <span className="text-2xl font-bold text-white">
                                        S/ {total.toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Enviar al WhatsApp
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
