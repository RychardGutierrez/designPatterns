package Creation;

public class Singleton {
    private static Singleton instance = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return instance;
    }


    // Lazy Days
    public class LazySingleton {
        // initialize the instance as null.
        private static LazySingleton instance = null;

        // private constructor, so it cannot be instantiated outside this class.
        private LazySingleton() {
        }

        // check if the instance is null, and if so, create the object.
        public static LazySingleton getInstance() {
            if (instance == null) {
                instance = new LazySingleton();
            }
            return instance;
        }
    }

    // Thread safety is key
    public class ThreadSafeSingleton {
        // initialize the instance as null.
        private static ThreadSafeSingleton instance = null;

        // private constructor, so it cannot be instantiated outside this class.
        private ThreadSafeSingleton() {  }

        // check if the instance is null, within a synchronized block. If so, create the object
        public static ThreadSafeSingleton getInstance() {
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSafeSingleton();
                }
            }
            return instance;
        }


    }

